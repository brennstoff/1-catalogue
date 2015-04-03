(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.backgroundGeolocation', {
                    url: "/backgroundGeolocation",
					controller : 'CordovaBackgroundGeolocationCtrl as cd',
                    templateUrl: "js/cordova/backgroundGeolocation/backgroundGeolocation.html"
                });
        });
})();