(function(){
  'use strict';

angular.module('myFirstApp',[])

.controller('MyFirstController',function($scope){
  $scope.name="Pooja";
  $scope.sayHello=function(){
  return"Hello Coursera!";
  };
});

})();
