(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.deviceOrientation', {
                    url: "/deviceOrientation",
					controller : 'CordovaDeviceOrientationCtrl as cd',
                    templateUrl: "js/cordova/deviceOrientation/deviceOrientation.html"
                });
        });
		
})();