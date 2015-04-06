(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('cordova.nativeAudio', {
                    url: "/nativeAudio",
					controller : 'CordovaNativeAudioCtrl as cd',
                    templateUrl: "js/cordova/nativeAudio/nativeAudio.html"
                });
        });
		
})();