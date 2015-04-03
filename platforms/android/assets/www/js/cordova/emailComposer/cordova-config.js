(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.emailComposer', {
                    url: "/emailComposer",
					controller : 'CordovaEmailComposerCtrl as cd',
                    templateUrl: "js/cordova/emailComposer/emailComposer.html"
                });
        });
})();