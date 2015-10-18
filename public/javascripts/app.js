angular.module('meanApp', ['ngRoute','meanApp.controllers'])
       .config(
         ['$routeProvider','$locationProvider',
          function($routeProvider,$locationProvider) {

            $routeProvider.when("/", {
                templateUrl: '/angular/users/index'
            });
            $routeProvider.when("/edit/:id", {
                templateUrl: '/angular/users/edit'
            });
            $routeProvider.when("/new", {
    					templateUrl: '/angular/users/new'
    				});

/*
            $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
            */
         }]
       );
