var testMoviesApp = angular.module('testMoviesApp', ['ngRoute'])
testMoviesApp.run(['$rootScope', '$location', 'SessionStorage', function($rootScope, $location, SessionStorage) {
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
});