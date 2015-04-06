(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova', {
                    abstract: true,
                    url: "/cordova",
					controller : 'CordovaPluginsCtrl as vm',
                    templateUrl: "js/cordova/cordova.html"
                })
                .state('cordova.panel', {
                    url: "/panel",
					controller : 'CordovaPanelCtrl as cd',
                    templateUrl: "js/cordova/panel.html"
                });
				
        });
})();