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
    var opacity = 1;
    var lastScrollTop = 0;
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if(st == 0)
            $('.navbar').css('opacity','1');
        
        if (opacity > 0.5 && (st > lastScrollTop)){
           $('.navbar').css('opacity','-=0.01');
           opacity -= 0.01;
        }
        else if(opacity < 1)
        {
           $('.navbar').css('opacity','+=0.01');
            opacity += 0.01;
        }
        lastScrollTop = st;
    });
    $(document).ready(function(){
        $(".navbar-margin").hover(function(){
            $(this).css("border-bottom", "3px solid red");
            }, function(){
            $(this).css("border-bottom","");
        });
    });
    
});

/*$(document).on('scroll', function (e) {
    $('.navbar').css('opacity', ($(document).scrollTop() / 200));
});*/