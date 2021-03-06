(function () {
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
      $scope.lunch='';
      $scope.message;
      $scope.messageColour={};
      $scope.LunchLimitChecker=function(){
          var lunchlist=$scope.lunch;
          lunchlist=lunchlist.split(',');
          if(lunchlist==''){
              $scope.message="please enter data first";
              $scope.messageColour.style={
                  'colour':'red',
                  'border':'2px solid red'
              }
          }
          else if(lunchlist.lengt<=3){
            $scope.message="Enjoy";
            $scope.messageColour.style={
                'colour':'green',
                'border':'2px solid green'
              }
          }
          else{
            $scope.message="Too much food";
            $scope.messageColour.style={
                'colour':'green',
                'border':'2px solid green'
              }
          }
      };
    }
  })();
