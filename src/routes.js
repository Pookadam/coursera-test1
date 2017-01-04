(function() {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    // define home state
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'src/home/home.html'
    })
    // define list state
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/categories/menulist.html',
      controller: 'MenuListController as menuList',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          var promise = MenuDataService.getAllCategories();

          return promise.then(function(result){
            return result.data;
          });
        }]
      }
    })
    // define detail state
    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/items/itemlist.html',
      controller: 'ItemsController as itemsList',
      resolve: {
        items: ['$stateParams','MenuDataService', function($stateParams, MenuDataService){
          console.log($stateParams);
          var promise = MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          return promise.then(function(result){
            return result.data.menu_items;
          })
        }]
      }
    })
  }
})();
