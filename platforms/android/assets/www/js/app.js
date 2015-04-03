(function () {

    'use strict';
//    angular.module('root', ['common.services','ionic','productResourceMock'])
    angular.module('root', ['ionic', 'ngCordova', 'common.services', "angular-data.DSCacheFactory", 'ngAnimate', 'toastr'])
            .run(function ($ionicPlatform, DSCacheFactory) {
                $ionicPlatform.ready(function () {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)
                    if (window.cordova && window.cordova.plugins.Keyboard) {
                        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    }
                    if (window.StatusBar) {
                        StatusBar.styleDefault();
                    }

                    DSCacheFactory("productDataCache", {storageMode: "localStorage", maxAge: 720000, deleteOnExpire: "aggressive"});
//                    DSCacheFactory("leaguesCache", {storageMode: "localStorage", maxAge: 720000, deleteOnExpire: "aggressive"});
//                    DSCacheFactory("myTeamsCache", {storageMode: "localStorage"});
                    DSCacheFactory("globalSettingCache", {storageMode: "localStorage"});
                });
            })
            .config(function ($stateProvider, $urlRouterProvider) {
                // if none of the above states are matched, use this as the fallback
                $urlRouterProvider.otherwise('/startup/cordova');
            })
            .config(function(toastrConfig) {
                angular.extend(toastrConfig, {
                    allowHtml: false,
                    closeButton: true,	//false,
                    closeHtml: '<button>&times;</button>',
                    containerId: 'toast-container',
                    extendedTimeOut: 1000,
                    iconClasses: {
                      error: 'toast-error',
                      info: 'toast-info',
                      success: 'toast-success',
                      warning: 'toast-warning'
                    },
                    maxOpened: 0,
                    messageClass: 'toast-message',
                    newestOnTop: true,
                    onHidden: null,
                    onShown: null,
                    positionClass: 'toast-top-right',
                    preventDuplicates: false,
                    tapToDismiss: true,
                    target: 'body',
                    timeOut: 5000, //5000,
                    titleClass: 'toast-title',
                    toastClass: 'toast'
                });
            });
})();