(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .directive('foundItems',FoundItems);

    function FoundItems() {
      var ddo = {
        templateUrl: 'founditem.html',
        restrict: 'E',
        scope: {
          foundItems : '<',
          onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'list',
        bindToController: true
      }

      return ddo;
    }

    function FoundItemsDirectiveController() {
      var list = this;


    }
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var list = this;
      list.searchTerm = "";
      list.getMatchedMenuItems = function(){
        var promise =  MenuSearchService.getMatchedMenuItems(list.searchTerm);
        promise.then(function (response) {
          list.found = response;
          checkIfEmpty();
        })
        .catch(function (error) {
          console.log("Error occured while connecting with url");
        });
      };

      list.removeItem = function(index) {
        list.found.splice(index, 1);
        checkIfEmpty();
      }

      function checkIfEmpty() {
        if(list.found.length == 0) {
          list.warning = "Nothing found";
        }else {
        list.warning = "";
        }
      }
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath']
    function MenuSearchService($http, ApiBasePath) {
      var service = this;



      service.getMatchedMenuItems = function(searchTerm) {
        var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
        }).then(function (response) {
          var foundItems = [];
          if (searchTerm == "")
            return foundItems;
          for(var item in response.data.menu_items) {
            if(response.data.menu_items[item].description.indexOf(searchTerm) !== -1) {
              foundItems.push(response.data.menu_items[item]);
            }
          }
          return foundItems;
        });
        return response;
      };


    }
})();
