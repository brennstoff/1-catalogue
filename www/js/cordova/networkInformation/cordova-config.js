(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.networkInformation', {
                    url: "/networkInformation",
					controller : 'CordovaNetworkInformationCtrl as cd',
                    templateUrl: "js/cordova/networkInformation/networkInformation.html"
                });
        });
})();