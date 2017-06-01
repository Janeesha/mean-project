var  app = angular.module("myContact", ['ngRoute']);
app.config(["$locationProvider", function($locationProvider){
	$locationProvider.hashPrefix('')
}])
app.config(["$routeProvider", function($routeProvider){
	
	$routeProvider
		.when("/register",{
			
			templateUrl: "register.html"
		})
		.when("/login",{
			
			templateUrl: "login.html"
		})
		
}])

app.controller("mycontroller",["$scope","$http",function($scope,$http){

	$scope.createContact=function(){
         console.log("in app.js");

		$http.post("/create",$scope.contact)
		.then(function(response){
		})
	}

	$scope.clear=function(){
		$scope.contact={};
	}
}])