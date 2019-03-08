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
.controller('MoviesCtrl', function($scope) {
    console.log('**** Movies');
})
.controller('DetailCtrl', function($scope) {
    console.log('**** Detail');
});

// angular.module('testMoviesApp', [])
//     .config(['$routeProvider', function($routeProvider) {
//         $routeProvider
//             .when('/', { 
//                 controller: 'appCtrl',
//                 controllerAs: 'vm',
//                 templateUrl: 'index.html'
//             })
//             .when('/movies', {
//                 controller: 'appCtrl',
//                 controllerAs: 'vm',
//                 templateUrl: 'movies.html'
//             })
//             .when('/about', {
//                 controller: 'appCtrl',
//                 controllerAs: 'vm',
//                 templateUrl: 'about.html'
//             })
//             .otherwise({
//                 redirectTo: '/'
//             });
//     }]);

// app.controller('appCtrl', function($scope) {
//     alert('estamos onfire!!');  
// }); 


// angular.module('testMoviesApp', ['ngRoute'])
//     .config(function ($routeProvider,$locationProvider) {
//         $routeProvider
//         .when('/', {
//             templateUrl: 'views/main.html',
//             controller: 'MainCtrl'
//         });
//     });

 /* CONTROLLER MAIN FORM */
//  testMoviesApp.controller('MainCtrl', function ($scope) {
//     console.log("APP STARTED");
//  });