(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.imagePicker', {
                    url: "/imagePicker",
					controller : 'CordovaImagePickerCtrl as cd',
                    templateUrl: "js/cordova/imagePicker/imagePicker.html"
                });
        });
		
})();