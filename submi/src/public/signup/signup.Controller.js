(function(module){

  var signupController = function(userService){
    var ctrl = this;
    ctrl.user = userService.getProfile();
    ctrl.isSaved = false;
    ctrl.submit = function(){
      userService.setProfile(ctrl.user);
      ctrl.isSaved = true;
    };

    ctrl.validateDish = function(){

    };
  };

signupController.$inject= ['userService']
  module.controller('signupController', signupController);

}(angular.module('public')));