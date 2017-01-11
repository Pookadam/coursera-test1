(function(module){
  var menuValidator = function(MenuService, $q, $timeout){

    return {
      restrict:'A',
      require:'ngModel',
    link : function($scope, $attr, $elem, ctrl) {
      ctrl.$asyncValidators.menuExists = function(value){
console.log("Validating");
          var deferred = $q.defer();
          var returnVal = false;
        MenuService.getMenuItems().then(function(data){

          for(var i=0; i< data.menu_items.length; i++)
          {
            if(data.menu_items[i].short_name == value)
            {
              deferred.resolve();
              returnVal= true;
            }
          }
          if(!returnVal){
              deferred.reject();
          }


          //ctrl.$setValidity('menuExists', false);
        });
        return deferred.promise;



      }
    }


    };
  };
menuValidator.$inject= ['MenuService', '$q', '$timeout'];
  module.directive('menuValidator', menuValidator);


}(angular.module('public')));