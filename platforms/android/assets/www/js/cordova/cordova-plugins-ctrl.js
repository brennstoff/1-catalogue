(function () {
    'use strict';
    angular.module('root').controller('CordovaPluginsCtrl', ['$state', '$ionicHistory', '$cordovaDevice', 'GlobalSettings', 'DSCacheFactory', CordovaPluginsCtrl]);
    function CordovaPluginsCtrl($state, $ionicHistory, $cordovaDevice, GlobalSettings, DSCacheFactory) {
//        self.globalSettingCache = DSCacheFactory.get("globalSettingCache");
        var vm = this;
        vm.title = "Cordova :: cordova.html";
        vm.myGoBack = function(){
            $ionicHistory.goBack();
        };

    };
})();