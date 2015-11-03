// Create an angular application called "sortApp"
var app = angular.module('sortApp', []);

// Define a controller "mainController" for you application, 
// making sure to pass in both the $scope and $http variables
app.controller('sortCtrl', function($scope, $http){
    $scope.sortType = 'name';
    $http.get('data/salaries.json').then(function(response){
        $scope.data = response.data
        
        console.log($scope.data)
    })
})
	// Use and $http.get request to get the salary data
	
		// Set $scope.data equal to the data returned in your results
