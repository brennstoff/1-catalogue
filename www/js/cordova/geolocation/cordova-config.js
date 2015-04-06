(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.geolocation', {
                    url: "/geolocation",
					controller : 'CordovaGeolocationCtrl as cd',
                    templateUrl: "js/cordova/geolocation/geolocation.html"
                });
        });
		
})();