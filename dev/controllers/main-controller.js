angular.module('testMoviesApp', ['ngRoute'])
.config(function($routeProvider) {
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
.controller('LoginCtrl', function($scope) {
    console.log('**** Login');
})
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
                // console.log(data);
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

})
.controller('DetailCtrl', function($scope) {
    console.log('**** Detail');
});