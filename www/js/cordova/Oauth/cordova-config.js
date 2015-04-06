(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.Oauth', {
                    url: "/Oauth",
					controller : 'CordovaOauthCtrl as cd',
                    templateUrl: "js/cordova/Oauth/Oauth.html"
                });
        });
		
})();