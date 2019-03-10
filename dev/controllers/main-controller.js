angular.module('testMoviesApp', ['ngRoute'])
.run(['$rootScope', '$location', 'SessionStorage', function($rootScope, $location, SessionStorage) {
    $rootScope.apiKey = 'f12ba140';
    $rootScope.apiMoviesURL = 'http://www.omdbapi.com/?apikey=' + $rootScope.apiKey + '&';
    $rootScope.apiSearchURL = 'http://img.omdbapi.com/?apikey=' + $rootScope.apiKey + '&';
    $rootScope.movies = [];
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        if (Object.keys(SessionStorage.getUser()).length !== 0) {
            $rootScope.loggedUser = SessionStorage.getUser();
        };
        if ($location.path() !== '/login' && Object.keys(SessionStorage.getUser()).length === 0) {
            alert('You need to be logged in to can enter here');
            $location.path('/login');
        }
    });
}])
.config(function($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('LoginService');
    $routeProvider
        .when('/login', { 
            controller: 'LoginCtrl',
            controllerAs: 'vm',
            templateUrl: 'login.html'
        })
        .when('/movies', {
            controller: 'MoviesCtrl',
            controllerAs: 'vm',
            templateUrl: 'movies.html'
        })
        .when('/detail/:id', {
            controller: 'DetailCtrl',
            controllerAs: 'vm',
            templateUrl: 'detail.html'
        })
        .otherwise({
            redirectTo: '/login'
        });
})
.factory('LocalStorage', ['$window', function($window) {
    return {
        set: function(key, value) {
            $window.localStorage[key] = value;
        },
        get: function(key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
            },
        setObject: function(key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function(key) {
            return JSON.parse($window.localStorage[key] || '{}');
        },
        setArray: function(key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getArray: function(key) {
            return JSON.parse($window.localStorage[key] || '[]');
        },
        clean: function (key) {
            $window.localStorage[key] = JSON.stringify([]);
        }
    }
}])
.factory('SessionStorage', ['$window', 'LocalStorage', function($window, $location, LocalStorage) {
    return {
        setUser: function(user) {
            $window.sessionStorage['LoggedUser'] = JSON.stringify(user);
        },
        getUser: function() {
            return JSON.parse($window.sessionStorage['LoggedUser'] || '{}');
        },
        cleanSession: function() {
            $window.sessionStorage.removeItem('LoggedUser');
            console.log('Session closed');
        }
    };
}])
.factory('Global', ['LocalStorage', 'SessionStorage', '$rootScope', '$location', function(LocalStorage, SessionStorage, $rootScope, $location) {
    return {
        getMovieById: function (imdbID) {
            var favs = LocalStorage.getArray('movies-favourites');
            return favs.find(x => x.imdbID === imdbID);
        },
        getNumFavs: function() {
            var favs = LocalStorage.getArray('movies-favourites');
            return favs.length;
        },
        getFavs: function() {
            return LocalStorage.getArray('movies-favourites');
        },
        cleanFavs: function() {
            if (confirm('Are you sure?')) {
                LocalStorage.clean('movies-favourites');
                $rootScope.$broadcast('cleanFavs', {
                    numFavs: 0
                });
            }
        },
        addToFav: function(movie) {
            var favs = LocalStorage.getArray('movies-favourites');
            favs.push(movie);
            LocalStorage.setArray('movies-favourites', favs);
            console.log(movie.Title + ' was added to favs (' + favs.length + ' total)');
            $rootScope.$broadcast('addFav', {
                favs: favs
            });
        },
        removeToFav: function(movie) {
            var favs = LocalStorage.getArray('movies-favourites');
            favs = favs.filter(item => item.imdbID !== movie.imdbID);
            LocalStorage.setArray('movies-favourites', favs);
            console.log(movie.Title + ' was removed to favs (' + favs.length + ' total)');
            $rootScope.$broadcast('removeFav', {
                favs: favs
            });
        },
        cleanUserSession: function() {
            SessionStorage.cleanSession();
            LocalStorage.clean('movies-favourites');
            $rootScope.loggedUser = null;
            $location.path('/login');
        }
    }
}])
.factory("LoginService", ['$timeout', function ($timeout) {
    var service = {};
    service.Login = function (username, password, callback) {
        $timeout(function(){
            var response = { success: username === 'user1' && password === 'gfi' };
            if(!response.success) {
                response.message = 'Username or password is incorrect';
            }else{
                response.message = 'Login ok';
                response.user = {
                    username,
                    password
                };
            }
            callback(response);
        }, 1000);
    };
    return service;
}])
.controller('NavigationCtrl', ['$scope', 'Global', function ($scope, Global) {
    $scope.numFavs = Global.getNumFavs();
    $scope.cleanFavs = Global.cleanFavs;
    $scope.logout = function() {
        if (confirm('Are you sure to close session? You will lose your favourites movies saved!')) {
            Global.cleanUserSession();
        }
    };
    $scope.$on('cleanFavs', function(e, opt) {
        $scope.numFavs = opt.numFavs;
    });
    $scope.$on('addFav', function(e, opt) {
        $scope.numFavs = opt.favs.length;
    });
    $scope.$on('removeFav', function(e, opt) {
        $scope.numFavs = opt.favs.length;
    });
}])
.controller('FavsCtrl', ['$scope', 'Global', function ($scope, Global) {
    $scope.favs = Global.getFavs();
    $scope.$on('cleanFavs', function(e, opt) {
        $scope.favs = [];
    });
    $scope.$on('addFav', function(e, opt) {
        $scope.favs = opt.favs;
    });
    $scope.$on('removeFav', function(e, opt) {
        $scope.favs = opt.favs;
    });
}])
.controller('LoginCtrl', ['$scope', '$rootScope', '$location', 'LoginService', 'SessionStorage', function($scope, $rootScope, $location, LoginService, SessionStorage) {
    $scope.loading = false;
    $scope.username = 'user1';
    $scope.password = 'gfi';
    $scope.login = function () {
        $scope.error = '';
        $scope.loading = true;
        console.log('Logging in with', $scope.username, $scope.password);
        LoginService.Login($scope.username, $scope.password, function(response) {
            if(response.success) {
                $rootScope.loggedUser = response.user;
                SessionStorage.setUser($rootScope.loggedUser);
                $location.path('/movies');
            } else {
                $scope.error = response.message;
                $scope.loading = false;
            }
        });
    };
}])
.controller('MoviesCtrl', ['$scope', '$rootScope', '$http', 'Global', function($scope, $rootScope, $http, Global) {
    $scope.totalResults = 0;
    $scope.searching = false;
    $scope.error = '';
    $scope.textToSearch = 'star';
    
    $scope.searchMovies = function() {
        $scope.searching = true;
        $rootScope.movies = [];
        $scope.totalResults = 0;
        
        var requestUrl = $rootScope.apiMoviesURL + 's=' + $scope.textToSearch;
        console.log('Get Movies URL', requestUrl);
        $http.get(requestUrl)
            .success(function(data) {
                $scope.searching = false;
                if (data.Response === 'True') {
                    $scope.totalResults = data.totalResults;
                    $rootScope.movies = data.Search;
                    // console.log($rootScope.movies);
                }else{
                    $scope.error = 'There was an error searching movies';
                }
            })
            .error(function(err) {
                console.log(err);
                $scope.searching = false;
                $scope.error = 'There was an error searching movies';
                $rootScope.movies = [];
            });
    };

    // $scope.addToFav = Global.addToFav;
}])
.controller('DetailCtrl', ['$scope', '$rootScope', '$routeParams', '$http', 'Global', 'LocalStorage', function($scope, $rootScope, $routeParams, $http, Global, LocalStorage) {
    $scope.movie = {};
    $scope.addToFav = Global.addToFav;
    $scope.searching = true;
    $scope.isAdded;
    $scope.init = function() {  
        $scope.movie = Global.getMovieById($routeParams.id);
        if ($scope.movie === undefined) {
            $scope.isAdded = false;
            var requestUrl = $rootScope.apiMoviesURL + 'i=' + $routeParams.id;
            console.log('Get Movie Info URL', requestUrl);
            $http.get(requestUrl)
                .success(function(data) {
                    $scope.searching = false;
                    if (data.Response === 'True') {
                        $scope.movie = data;
                    }else{
                        $scope.error = 'There was an error searching movies';
                    }
                })
                .error(function(err) {
                    console.log(err);
                    $scope.searching = false;
                    $scope.error = 'There was an error searching movies';
                    $rootScope.movies = [];
                });
        }else{
            $scope.isAdded = true;
            $scope.searching = false;
        }
    }

    $scope.addToFav = function() {
        Global.addToFav($scope.movie);
        $scope.isAdded = true;
    } 

    $scope.removeToFav = function() {
        Global.removeToFav($scope.movie);
        $scope.isAdded = false;
    } 

}]);