(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider

                .state('email-signup', {
                    url: "/email-signup",
                    templateUrl: "scripts/emailSignUp/email-signup.html"
                });
        });

})();