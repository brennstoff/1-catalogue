(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova', {
                    abstract: true,
                    url: "/cordova",
                    templateUrl: "js/cordova/cordova.html"
                })
                .state('cordova.panel', {
                    url: "/panel",
                    templateUrl: "js/cordova/panel.html"
                });
        });
})();