(function() {
  'use strict';

  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var buy = this;
    buy.buyItem = function(itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
    buy.items = ShoppingListCheckOffService.getAvailableItems();
  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var boughtList = [];
    var buyList = [
      { name: "Colddrinks",       quantity: 10 },
      { name: "Cheese Cubes", quantity: 5 },
      { name: "Choclates", quantity: 20 },
      { name: "Eggs",  quantity: 12 },
      { name: "Brown Bread",  quantity: 3 }
    ];

    service.buyItem = function(itemIndex) {
      boughtList.push(buyList[itemIndex]);
      buyList.splice(itemIndex, 1);
    };

    service.getAvailableItems = function() {
      return buyList;
    };

    service.getBoughtItems = function() {
      return boughtList;
    };
  }
})();
