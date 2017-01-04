(function(){
  'use strict';

  angular.module('MenuApp')
    .controller('MenuListController', MenuListController);

  MenuListController.$inject = ['categories'];
  function MenuListController(categories) {
    var menuList = this;
    menuList.categories = categories;
  }
})();
