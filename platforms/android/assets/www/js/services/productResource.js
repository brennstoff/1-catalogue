/**
 * Created by Deb on 8/21/2014.
 */
(function () {
    "use strict";

    angular
            .module("common.services")
            .factory("productResource",
                    ["$http", '$q', '$ionicLoading', 'DSCacheFactory', productResource]);
    function productResource($http, $q, $ionicLoading, DSCacheFactory) {
        self.globalSettingCache = DSCacheFactory.get("globalSettingCache");
        self.productDataCache = DSCacheFactory.get("productDataCache");
        self.productDataCache.setOptions({
            onExpire: function (key, value) {
                getLeagueData()
                    .then(function () {
                        console.log("Products Data Cache was automatically refreshed.", new Date());
                    }, function () {
                        console.log("Error getting data. Putting expired item back in the cache.", new Date());
                        self.productDataCache.put(key, value);
                    });
            }
        });
        function getAllProducts(forceRefresh) {
            if (typeof forceRefresh === "undefined") { forceRefresh = false; }

            var deferred = $q.defer(),
                cacheKey = "productData",
                leagueData = null;

            if (!forceRefresh) {
                leagueData = self.productDataCache.get(cacheKey);
            };

            if (leagueData) {
                console.log("Found data in cache ");
                deferred.resolve(leagueData);
            } else {
                $ionicLoading.show({
                    template: 'Loading...'
                });

                $http.get("js/data/products.json")
                    .success(function(data, status) {
                        console.log("Received schedule data via HTTP. ");
//                        console.log(data, status);
                        self.productDataCache.put(cacheKey, data);
                        $ionicLoading.hide();
                        deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        $ionicLoading.hide();
                        deferred.reject();
                    });
            }
            return deferred.promise;
        };
        function getKitchenTools(productId) {

            return resultedList;
        }
        function getKhomchaAndPlate(productId) {

            return resultedList;
        }
        function getDeepDabbaMilkPotes(productId) {

            return resultedList;
        }
        function getGlass(productId) {

            return resultedList;
        }

        return {
            getAllProducts: getAllProducts,
            getKitchenTools: getKitchenTools,
            getKhomchaAndPlate: getKhomchaAndPlate,
            getDeepDabbaMilkPotes: getDeepDabbaMilkPotes,
            getGlass: getGlass
        }
    }

}());
