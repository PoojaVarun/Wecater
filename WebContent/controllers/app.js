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

//Added REST $http call - Varun
routerApp.controller('widgetsController', function($scope,$http) {
	$scope.name=null;
	$scope.age=null;
	alert("Hi");
	$http.get("http://localhost:2222/Cateringservice/rest/Caters/getUsers")
	.then(function(response) {
		$scope.name=response.data.name;
		$scope.age=response.data.age;
	}, function(response) {
		$scope.name="Fail";
		$scope.age=null;
	});
	
	
	
});

routerApp.controller('Myctrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
        
    }
    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-white", "");
         }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        dots[myIndex-1].className += " w3-white";
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }
});

/*$(document).on('scroll', function (e) {
    $('.navbar').css('opacity', ($(document).scrollTop() / 200));
});*/



//Slideshow Script
