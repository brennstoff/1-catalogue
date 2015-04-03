(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.device', {
                    url: "/device",
                    controller : 'CordovaDeviceCtrl as cd',
                    templateUrl: "js/cordova/device/device.html"
                });
        });
})();