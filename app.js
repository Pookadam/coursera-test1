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

          if(lunchlist.length <= 3 && lunchlist.length > 0){
            $scope.message = "Enjoy";
            $scope.messageColour.style = {
                'colour':'green',
                'border':'2px solid green'
              }
          }

            if(lunchlist.length == 0){
              $scope.message="please enter data first";
              $scope.messageColour.style={
                  'colour':'red',
                  'border':'2px solid red'
              }
          }
          if(lunchlist.lengt > 3){
            $scope.message="Too much ...!!!";
            $scope.messageColour.style={
                'colour':'green',
                'border':'2px solid green'
              }
          }

      };
    }
  })();
