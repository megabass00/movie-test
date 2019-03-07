var app = angular.module('testMoviesApp', []);
// app.config(function($routeProvider) {
//     $routeProvider
//         .when('/', { 
//             controller: 'appCtrl',
//             controllerAs: 'vm',
//             templateUrl: 'index.html'
//         })
//         .when('/movies', {
//             controller: 'appCtrl',
//             controllerAs: 'vm',
//             templateUrl: 'movies.html'
//         })
//         .when('/about', {
//             controller: 'appCtrl',
//             controllerAs: 'vm',
//             templateUrl: 'about.html'
//         })
//         .otherwise({
//             redirectTo: '/'
//         });
// });

app.controller('appCtrl', function($scope) {
    alert('estamos onfire!!'); 
});