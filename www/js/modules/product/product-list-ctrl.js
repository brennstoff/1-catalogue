(function () {
    'use strict';

//    angular.module('root').controller('ProductListCtrl', ["productResource",ProductListCtrl]);
    angular.module('root').controller('ProductListCtrl', ['productResource','productHelper',ProductListCtrl]);
//    function ProductListCtrl(productResource) {
    function ProductListCtrl(productResource,productHelper) {
        var vm = this;  vm.products = []; var products = [];

        vm.title = 'Products Collection';
//        filterKitchenTools(-1,productResource.getKitchenTools(-1));
        
        products = productResource.getAllProducts();
//        console.log(products);
        vm.products = productHelper.filterProductCategory('600', products , -1);
//        console.log(vm.products);
        
    };
})();