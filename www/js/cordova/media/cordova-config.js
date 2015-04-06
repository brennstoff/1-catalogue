(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.media', {
                    url: "/media",
					controller : 'CordovaMediaCtrl as cd',
                    templateUrl: "js/cordova/media/media.html"
                });
        });
		
})();