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
//        vm.items = [1, 2, 3];
//        if (systemCheck == true) {
//            var result = { referer:'jimbob', param2:37, etc:'bluebell' };
//            $state.go('toState', result);
//            $state.go('cordova.panel');
//        }
//        document.addEventListener("deviceready", function () {
//
//            self.globalSettingCache.put("device", $cordovaDevice.getDevice());
//            vm.items.push('$cordovaDevice.getDevice ' + $cordovaDevice.getDevice());
////        vm.items.push('GlobalSettings.getCordova ' + GlobalSettings.getCordova());
//            self.globalSettingCache.put("cordova", $cordovaDevice.getCordova());
//            vm.items.push('$cordovaDevice.getCordova ' + $cordovaDevice.getCordova());
////        vm.items.push('GlobalSettings.getModel ' + GlobalSettings.getModel());
//            self.globalSettingCache.put("model", $cordovaDevice.getModel());
//            vm.items.push('$cordovaDevice.getModel() ' + $cordovaDevice.getModel());
////        vm.items.push('GlobalSettings.getPlatform ' + GlobalSettings.getPlatform());
//            self.globalSettingCache.put("platform", $cordovaDevice.getPlatform());
//            vm.items.push('$cordovaDevice.getPlatform ' + $cordovaDevice.getPlatform());
////        vm.items.push('GlobalSettings.getUuid ' + GlobalSettings.getUuid());
//            self.globalSettingCache.put("uuid", $cordovaDevice.getUuid());
//            vm.items.push('$cordovaDevice.getUuid ' + $cordovaDevice.getUuid());
////        vm.items.push('GlobalSettings.getVersion ' + GlobalSettings.getVersion());
////          var version = $cordovaDevice.getVersion();
//            self.globalSettingCache.put("version", $cordovaDevice.getVersion());
//            vm.items.push('$cordovaDevice.getVersion ' + $cordovaDevice.getVersion());
//            
//        });


//$ionicPlatform.ready(function() {
//  $cordovaPlugin.someFunction().then(success, error);
//});
//function success(){
//    vm.items.push('Check Success on $cordova Plugin ');
//}
//function error(){
//    vm.items.push('Check Error on $cordova Plugin ');
//}
//        vm.items.push('Cordova.startVibration ' + Cordova.startVibration());
//        vm.items.push('Cordova.getGeolocation ' + Cordova.getGeolocation());
//        vm.items.push('Cordova.checkEmailComposer ' + Cordova.checkEmailComposer());
//        vm.items.push('Cordova.getPreferredLanguage ' + Cordova.getPreferredLanguage());
//        vm.items.push('Cordova.getLocaleName ' + Cordova.getLocaleName());
//        vm.items.push('Cordova.getFirstDayOfWeek ' + Cordova.getFirstDayOfWeek());
//        vm.items.push('Cordova.getFreeDiskSpace ' + Cordova.getFreeDiskSpace());


    };
})();