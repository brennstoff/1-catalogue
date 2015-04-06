(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.', {
                    url: "/",
					controller : 'CordovaCtrl as cd',
                    templateUrl: "js/cordova//.html"
                });
        });
		
})();