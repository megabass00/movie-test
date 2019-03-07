angular.module("app", ["ngRoute"])
    .config(($routeProvider) => {
        $routeProvider
            .when("/", {
                controller: "appCtrl",
                controllerAs: "vm",
                templateUrl: "index.html"
            })
            .when("/movies", {
                controller: "appCtrl",
                controllerAs: "vm",
                templateUrl: "movies.html"
            })
            .when("/about", {
                controller: "appCtrl",
                controllerAs: "vm",
                templateUrl: "about.html"
            });
    })
    .controller("appCtrl", () => {
        alert('estamos onfire!!'); 
    });