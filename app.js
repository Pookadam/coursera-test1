(function () {
'use strict';

angular.module('LunchCheckapp', []);
.controller('LunchCheckController', function($scope) {
   	var txtfood=$scope.foodbox.val();
    var foodcount=txtfood.split(,);
   }
mop(function(txtfood){
	return Number(txtfood);
});
if(foodcount<=3)
{
	$(#error msg).val ("Enjoy!");
}
else if(foodcount>3)
{
	$(#error msg).val ("Not Valid!");
}
