(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.fileTransfer', {
                    url: "/fileTransfer",
					controller : 'CordovaFileTransferCtrl as cd',
                    templateUrl: "js/cordova/fileTransfer/fileTransfer.html"
                });
        });
		
})();