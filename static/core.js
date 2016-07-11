
var app = angular.module('Flights', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
     /* controller:'HomeController', 
     */ templateUrl:'views/home.html' 
    }) 
	  	.when('/search',{
	    /*controller:'PhotoController'
	    ,*/templateUrl:'views/searchFlights.html'
	  })
		
		.when('/terms',{
	    /*controller:'PhotoController'
	    ,*/templateUrl:'views/terms.html'
	  })
		.when('/flights',{
	    /*controller:'PhotoController'
	    ,*/templateUrl:'views/flights.html'
	  })
		.when('/payment',{
	    /*controller:'PhotoController'
	    ,*/templateUrl:'views/payment.html'
	  })
			.when('/thanks',{
	    /*controller:'PhotoController'
	    ,*/templateUrl:'views/thanks.html'
	  })

			.when('/confirm',{
	    /*controller:'PhotoController'
	    ,*/templateUrl:'views/confirm.html'
	  })

   /* .otherwise({ 
      redirectTo: '/' 
    }); */
});
