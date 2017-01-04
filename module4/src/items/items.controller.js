(function(){
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var itemsList = this;
    console.log(items);
    itemsList.items = items;
  }
})();
