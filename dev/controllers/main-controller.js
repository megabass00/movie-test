angular.module('testMoviesApp', ['ngRoute'])
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
        .when('/detail', {
            controller: 'DetailCtrl',
            controllerAs: 'vm',
            templateUrl: 'detail.html'
        })
        .otherwise({
            redirectTo: '/login'
        });
})
.factory("LoginService", ['$timeout', function ($timeout) {
    var service = {};
    service.Login = function (username, password, callback) {
        $timeout(function(){
            var response = { success: username === 'test' && password === 'test' };
            if(!response.success) {
                response.message = 'Username or password is incorrect';
            }
            callback(response);
        }, 1000);
    };
    return service;
}])
.controller('LoginCtrl', ['$scope', '$location', 'LoginService', function($scope, $location, LoginService) {
    console.log('**** Login');
    $scope.loading = false;

    $scope.login = function () {
        $scope.loading = true;
        console.log('Login with', $scope.username, $scope.password);
        LoginService.Login($scope.username, $scope.password, function(response) {
            console.log(response);
            if(response.success) {
                $location.path('/movies');
            } else {
                $scope.error = response.message;
                $scope.loading = false;
            }
        });
    };
}])
.controller('MoviesCtrl', function($scope, $http) {
    console.log('**** Movies');
    const apiKey = 'f12ba140';
    const apiURL = 'http://www.omdbapi.com/?apikey=' + apiKey + '&';

    $scope.results = [];
    $scope.totalResults = 0;
    $scope.searching = false;
    $scope.error = '';
    $scope.textToSearch = 'star';
    
    $scope.searchMovies = function() {
        $scope.searching = true;
        var requestUrl = apiURL + 's=' + $scope.textToSearch;
        console.log('Request URL', requestUrl);
        $http.get(requestUrl)
            .success(function(data) {
                if (data.Response == 'True') {
                    $scope.totalResults = data.totalResults;
                    $scope.results = data.Search;
                    console.log($scope.results);
                }else{
                    $scope.error = 'There was an error searching movies';
                }
            })
            .error(function(err) {
                console.log(err);
                $scope.error = 'There was an error searching movies';
            });
    };

    $scope.addToFav = function(id) {
        console.log('ID', id);
    }
})
.controller('DetailCtrl', function($scope) {
    console.log('**** Detail');
});