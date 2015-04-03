(function () {
    'use strict';

    angular.module('root').controller('ProductDetailCtrl', ['$stateParams', 'productResource', 'productHelper', '$state', ProductDetailCtrl]);

    function ProductDetailCtrl($stateParams, productResource, productHelper, $state) {
        
        var vm = this, products = [], newIndex = 0;
        vm.currentProduct = [];
//        console.log("stateParams ", $stateParams);
        vm.index = Number($stateParams.id);
        
 //       KitchenTools - "600", KHOMCHA-AND-PLATE - "300", deep-dabba-milk-potes - "100", misc items - "500"
 //       Dinner Set - "400"
        
        products = productResource.getAllProducts();
//        console.log(products);
        vm.products = products;
        
        vm.totalProducts = productHelper.getTotalProducts('600', products);
        console.log(vm.totalProducts);
        
        vm.index = (vm.index < 0) ? vm.totalProducts : vm.index;
        vm.index = (vm.index > vm.totalProducts) ? 0 : vm.index;
        
        console.log('current vm index is => ' + vm.index);
        
        vm.currentProduct = productHelper.filterProductCategory('600', products, vm.index);
//        console.log(vm.currentProduct);
        
    };
})();