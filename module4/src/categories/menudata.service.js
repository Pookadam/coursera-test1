(function() {
  'use strict';

  angular.module('Data')
    .service('MenuDataService', MenuDataService)
    .constant('FetchCategoriesUrl', 'https://davids-restaurant.herokuapp.com/categories.json')
    .constant('FetchCategoryItemsUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');

  MenuDataService.$inject = ['$http', 'FetchCategoriesUrl', 'FetchCategoryItemsUrl'];
  function MenuDataService($http, FetchCategoriesUrl, FetchCategoryItemsUrl) {
    var service = this;

    service.getAllCategories = function(){
      //return ['1', '2', '3'];
      return $http.get(FetchCategoriesUrl);
    };

    service.getItemsForCategory = function(categoryShortName) {
      console.log(categoryShortName);
      return $http.get(FetchCategoryItemsUrl + categoryShortName);
    };
  }

})();
