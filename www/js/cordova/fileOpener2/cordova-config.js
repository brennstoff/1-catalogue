(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.fileOperner2', {
                    url: "/fileOperner2",
					controller : 'CordovaFileOperner2Ctrl as cd',
                    templateUrl: "js/cordova/fileOperner2/fileOperner2.html"
                });
        });
		
})();