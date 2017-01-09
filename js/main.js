  var app=angular.module('app', []);
  app.service('ApiService', function($http){

    this.getData=function(link){
      return $http({
        method: 'GET',
        url: link
      });
    }
  });

  app.controller('DataController', function($scope, $rootScope, ApiService){

    $rootScope.text='root text';
    $scope.name='DataController';
    $scope.load=function(){
      alert('button clicked');
    }

    $scope.dataset=ApiService.getData('https://data.baltimorecity.gov/resource/m8g9-abgb.json').then(function(res){
      console.dir(res.data);

    }, function(err){
      console.dir(err.message);

    });

  }).controller('TestController', function($scope, $rootScope){
    $scope.name='TestController';
    $scope.testing=function(){
      alert('test function');
    }
  });