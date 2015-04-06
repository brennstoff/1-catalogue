(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.dialogs', {
                    url: "/dialogs",
					controller : 'CordovaDialogsCtrl as cd',
                    templateUrl: "js/cordova/dialogs/dialogs.html"
                });
        });
		
})();