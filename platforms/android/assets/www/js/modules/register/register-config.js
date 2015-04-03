(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider

                .state('register', {
                    url: "/register",
                    templateUrl: "scripts/registerUser/register-user.html"
                });
        });

})();