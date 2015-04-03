(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('product', {
                    abstract: true,
                    url: "/product",
                    templateUrl: "js/modules/product/product.html"
                })
                .state('product.list', {
                    url: "/list",
                    templateUrl: "js/modules/product/product-list.html"
                })
                .state('product.details', {
                    url: "/details/:id",
                    templateUrl: "js/modules/product/product-detail.html"
                });
        });
})();