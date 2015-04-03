/**
 * Created by Deb on 9/2/2014.
 */
(function () {
    "use strict";

    angular
            .module("common.services")
            .factory("productHelper",
                    ["$http", '$q', 'DSCacheFactory', productHelper]);

    function productHelper($http, $q, DSCacheFactory) {
        self.globalSettingCache = DSCacheFactory.get("globalSettingCache");
        function getTotalProducts(category, allProducts) {
            var catId = category, products = [], total = 0;
            console.log('getting total products for category');
//                        console.log(allProducts);
            allProducts.then(function (data) {
//                    console.log(data);
                _.result(_.forEach(data, function (n) {
                    if (_.contains(n.pCategoriesIds, catId)) {
//                      console.log(n); 
//                      products.push(n);
                        total = total + 1;
//                      console.log(n.pCategoriesIds);
                    }
                }));
                //console.log(total); //console.log(products);
                self.globalSettingCache.put("totalProduct", total - 1 );
//                return total;
            });
//            console.log(total);
            return self.globalSettingCache.get("totalProduct");
        }
        function filterProductCategory(category, allProducts, index) {
            var catId = category, products = [];
            if (index < 0 || index == null) {
                console.log('index less than 0');
//                 console.log(allProducts);
                allProducts.then(function (data) {
//                    console.log(data);
                    _.result(_.forEach(data, function (n) {
                        if (_.contains(n.pCategoriesIds, catId)) {
                            // console.log(n); 
                            products.push(n);
                        }
                    }));
//                    console.log(products);
                });
            }
            else if (index > -1) {
                console.log('index greater than -1');
                var counter = 0, success = false;
                allProducts.then(function (data) {
//                    console.log(data);
                    _.result(_.forEach(data, function (n) {
                        if (_.contains(n.pCategoriesIds, catId) && !success) {
                            console.log('searching products...');
                            if (counter == index) {
                                products.push(n);
                                success = true;
                            }
                            counter++;
                        }
                    }))
                });
            }
            ;
//            console.log(products);
            return products;
        }
        ;
        function calculateMarginPercent(price, cost) {
            var margin = 0;
            if (price && cost) {
                margin = (100 * (price - cost)) / price;
            }
            margin = Math.round(margin);
            return margin;
        }
        function calculateMarginAmount(price, cost) {
            var margin = 0;
            if (price && cost) {
                margin = price - cost;
            }
            return margin;
        }
        function calculatePriceFromPercent(cost, percent) {
            var price = cost;
            if (cost && percent) {
                price = cost + (cost * percent / 100);
                price = (Math.round(price * 100)) / 100;
            }
            return price;
        }
        function calculatePriceFromAmount(cost, amount) {
            var price = cost;
            if (cost && amount) {
                price = cost + amount;
                price = (Math.round(price * 100)) / 100;
            }
            return price;
        }

        return {
            calculateMarginPercent: calculateMarginPercent,
            calculateMarginAmount: calculateMarginAmount,
            calculatePriceFromMarkupPercent: calculatePriceFromPercent,
            calculatePriceFromMarkupAmount: calculatePriceFromAmount,
            filterProductCategory: filterProductCategory,
            getTotalProducts: getTotalProducts
        }
    }
}());
