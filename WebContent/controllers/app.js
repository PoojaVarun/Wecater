/**
 * 
 */
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('Home', {
            url: '/home',
            	
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('Menu', {
            // we'll get to this in a bit     
        	url: '/menu',
            templateUrl: 'HomePage1.html',
            controller: 'widgetsController',
	        activetab: 'Menu'
        })
        .state('Offers', {
            // we'll get to this in a bit  
        	url: '/offers',
            templateUrl: 'HomePage1.html',
            controller: 'widgetsController',
	        activetab: 'Offers'
        });
        
});

routerApp.controller('widgetsController', function($scope, $location) {
});

routerApp.controller('Myctrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});