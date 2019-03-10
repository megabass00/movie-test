testMoviesApp.factory('LocalStorage', ['$window', function($window) {
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
