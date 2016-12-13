(function () {
'use strict';

angular.module('DemoApp',[])

.controller('DemoController',function($scope){
 //message
   $scope.message="Welcome...";
 //Click function
   &scope.ShowOutput=function(food){
   var fooditems =food.length;
   var i;
   var k=0;
   for(i=0;i<=fooditem;i++)
   {
    var j== str.charCodeAt(i);
    if(j=44)
    {
      k++;
    }
   }
   if(k>0 && k<=3)
   $scope.message="Enjoy...";
   else if(k>3)
   $scope.message="Too much food";
   else if(k==0)
   $scope.message="Enter food item";

});


})();
