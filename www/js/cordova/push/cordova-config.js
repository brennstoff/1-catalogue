(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.push', {
                    url: "/push",
					controller : 'CordovaPushCtrl as cd',
                    templateUrl: "js/cordova/push/push.html"
                });
        });
		
})();