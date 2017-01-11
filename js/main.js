    // creating a module and naming it as app
    var app=angular.module('app', []);
    app.service('ApiService', function($http){

      this.getData=function(link){
        return $http({
          method: 'GET',
          url: link 
        });
      }
    });

    // controller for the Bar chart
    app.controller('DataController', function($scope, $rootScope, ApiService){
      var d={};
      var  a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];     
      var chartData=[];

      ApiService.getData('https://data.baltimorecity.gov/resource/m8g9-abgb.json?$$app_token=P01icqAl4ammUSWm4G3LgeLJB')
      .then(function(res){
        console.dir(res.data);
        ds = res.data;
        var d;
        for(var i=0; i<ds.length; i++){
          // console.dir(ds[i]);  
          var dt=new Date(ds[i].calldatetime);
          // console.log(dt.getHours());  
          a[dt.getHours()]++; 
          
        }
        // array of colors for the pie chart
        var colors = ["#2484c1", "#0c6197", "#4daa4b", "#90c469", "#daca61", "#e4a14b", "#e98125", "#cb2121", "#830909", "#923e99", "#d1c87f",
        "#ae83d5", "#bf273e", "#ce2aeb", "#bca44a", "#618d1b", "#1ee67b", "#b0ec44", "#a4a0c9", "#322849", "#86f71a", "#7d9058"];
        console.dir(a);

        // 
        for(var h=0; h<24; h++){
          if(a[h] == 0){
            chartData[h]={"label":h.toString(), "value": 0.1,"color": colors[h]};
          }else{
            chartData[h]={"label":h.toString(), "value": a[h],"color": colors[h]};
          }
          
        }
        // printing the array of elements
        console.dir(chartData);

        // creating pie chart with the data from ApiService
        var pie = new d3pie("pieChart", {
          "header": {
            "title": {
              "text": "911 calls",
              "fontSize": 34,
              "font": "courier"
            },
            "subtitle": {
              "text": "Number of calls in 24 hours",
              "color": "#999999",
              "fontSize": 10,
              "font": "courier"
            },
            "location": "pie-center",
            "titleSubtitlePadding": 10
          },
          "footer": {
            "text": "* .",
            "color": "#999999",
            "fontSize": 10,
            "font": "open sans",
            "location": "bottom-left"
          },
          "size": {
            "canvasWidth": 800,
            "canvasHeight": 800,
            "pieInnerRadius": "85%",
            "pieOuterRadius": "40%"
          },
          "data": {
            "sortOrder": "label-asc",
            "content": chartData
          },
          "labels": {
            "outer": {
              "format": "label-percentage1",
              "pieDistance": 10
            },
            "inner": {
              "format": "none"
            },
            "mainLabel": {
              "fontSize": 13
            },
            "percentage": {
              "color": "#999999",
              "fontSize": 11,
              "decimalPlaces": 1
            },
            "value": {
              "color": "#cccc43",
              "fontSize": 11
            },
            "lines": {
              "enabled": true,
              "color": "#777777"
            },
            "truncation": {
              "enabled": true
            }
          },
          "effects": {
            "pullOutSegmentOnClick": {
              "effect": "linear",
              "speed": 400,
              "size": 8
            }
          },
          "misc": {
            "colors": {
              "segmentStroke": "#000000"
            }
          }
        });
        
      });

      $rootScope.text='root text';
      $scope.name='DataController';
      $scope.load=function(){
        alert('button clicked');
      }

      $scope.dataset=ApiService.getData('https://data.baltimorecity.gov/resource/m8g9-abgb.json?$$app_token=P01icqAl4ammUSWm4G3LgeLJB').then(function(res){
        console.dir(res.data);
        $scope.array = res.data;

      });

    });



    app.controller('TestController', function($scope, $rootScope){ // second controller
      $scope.name='TestController';
      $scope.testing=function(){
        alert('test function');
      }
    });

     app.controller('ChartController', function($scope, $rootScope, ApiService){ // second controller
      $scope.name='ChartController'; 
      $scope.getJsonData = function(){
        
      }  
    });

