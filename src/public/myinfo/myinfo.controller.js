(function(module){

  var myinfoController = function(userService, MenuService){
    var ctrl = this;
    ctrl.user = userService.getProfile();

    ctrl.getMenuItem = function(){
      MenuService.getMenuItems().then(function(data){
        for(var i=0; i< data.menu_items.length; i++)
        {
          if(data.menu_items[i].short_name == ctrl.user.favDish)
          {
            ctrl.menuItem =  data.menu_items[i];
          }
        }
      });
    };
    ctrl.getMenuItem();

  }
  myinfoController.$inject= ['userService','MenuService']
  module.controller('myinfoController', myinfoController);
}(angular.module('public')));