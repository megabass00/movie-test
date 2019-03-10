testMoviesApp.controller('NavigationCtrl', ['$scope', 'Global', function ($scope, Global) {
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
    $scope.textToSearch = '';
    
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
    $scope.enterPressed = function(keyEvent) {
        if (keyEvent.which === 13) {
            $scope.searchMovies();
        }
    }
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