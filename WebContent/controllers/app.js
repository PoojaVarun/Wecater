/**
 * 
 */
var routerApp = angular.module('routerApp', ['ui.router','ngMaterial', 'jkAngularCarousel']);

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
	$http.get("http://localhost:8001/Catering_service/rest/Caters/getUsers")
	.then(function(response) {
		$scope.name=response.data.name;
		$scope.age=response.data.age;
	}, function(response) {
		$scope.name="Fail";
		$scope.age=null;
	});
});

routerApp.controller('Myctrl', function($scope, $location,$animate, $interval) {
	$scope.value="";
    $scope.isActive = function(route) {
        return route === $location.path();
    } 
    $scope.slides = [
        {image: 'media/images/1.jpg', description: 'Image 00'},
        {image: 'media/images/2.jpg', description: 'Image 01'},
        {image: 'media/images/3.jpg', description: 'Image 02'}
    ];
    $scope.isActiveSlide = function(index) {
        return index === 0;
    }
    $scope.search = function() {
        alert("Value to be searched is "+$scope.value);
    }
});
routerApp.controller('CarouselCtrl', function($scope) {
    $scope.dataArray = [
      {
        src: 'media/images/1.jpg'
      },
      {
        src: 'media/images/2.jpg'
      },
      {
        src: 'media/images/3.jpg'
      }
    ];
});

/*$(document).on('scroll', function (e) {
    $('.navbar').css('opacity', ($(document).scrollTop() / 200));
});*/