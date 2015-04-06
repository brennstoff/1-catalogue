(function () {
    'use strict';
    angular.module('root').controller('CordovaDialogsCtrl', ['toastr','$ionicPlatform','$cordovaVibration', 'DSCacheFactory', CordovaDialogsCtrl]);
    function CordovaDialogsCtrl(toastr, $ionicPlatform, $cordovaVibration, DSCacheFactory) {
        
		self.globalSettingCache = DSCacheFactory.get("globalSettingCache");

        var vm = this;
		
        vm.title = "Cordova :: dialogs.html"; vm.result = "No input";
		// toast functions => success info error warning clear([toast])
		
		vm.judgeAction = function(){
			toastr.success('in judge action', 'Other text!');
			switch(vm.feature){
				case "cv": //tested vibrate device for given time in ms
					$ionicPlatform.ready(function() {
						toastr.success('Vibration for 1000ms');
						$cordovaVibration.vibrate(1000);
					});
					break;
				
				case "nv": //tested vibrate device for given time in ms
					$ionicPlatform.ready(function() {
						toastr.success('Vibration for 3000ms');
						navigator.vibrate(3000);
					});
					break;
				
				default :  //tested vibrate device for given time in ms
					$ionicPlatform.ready(function() {
						toastr.error('No input match');
					});
					vm.result = "No match found input";
					break;
			}
		}
		
    };
})();