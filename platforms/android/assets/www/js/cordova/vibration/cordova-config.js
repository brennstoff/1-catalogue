(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.vibration', {
                    url: "/vibration",
					controller : 'CordovaVibrationCtrl as cd',
                    templateUrl: "js/cordova/vibration/vibration.html"
                });
        });
		
})();