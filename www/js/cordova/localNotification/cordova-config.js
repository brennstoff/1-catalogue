(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.localNotification', {
                    url: "/localNotification",
					controller : 'CordovaLocalNotificationCtrl as cd',
                    templateUrl: "js/cordova/localNotification/localNotification.html"
                });
        });
		
})();