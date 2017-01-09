var app=angular.module('app', []);
app.service('ApiService', function(){

	this.loadData=function(){}
});

app.controller('DataController', function($scope, $rootScope, ApiService){


	$scope.loadData=function(){
		alert('button clicked');
	}

$scope.dataset=ApiService.loadData();

});