(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.socialSharing', {
                    url: "/socialSharing",
					controller : 'CordovaSocialSharingCtrl as cd',
                    templateUrl: "js/cordova/socialSharing/socialSharing.html"
                });
        });
		
})();