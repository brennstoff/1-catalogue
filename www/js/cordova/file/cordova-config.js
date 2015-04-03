(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.file', {
                    url: "/file",
					controller : 'CordovaFileCtrl as cd',
                    templateUrl: "js/cordova/file/file.html"
                });
        });
})();