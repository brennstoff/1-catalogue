(function () {
    'use strict';
    angular.module('root').controller('CordovaVibrationCtrl', ['$ionicPlatform','$cordovaVibration', 'DSCacheFactory', CordovaVibrationCtrl]);
    function CordovaVibrationCtrl($ionicPlatform, $cordovaVibration, DSCacheFactory) {
        
		self.globalSettingCache = DSCacheFactory.get("globalSettingCache");

        var vm = this;
		
        vm.title = "Cordova :: NetworkInformation.html"; vm.result = "No input";
		// toast functions => success info error warning clear([toast])
		
		vm.judgeAction = function(){
			toastr.success('in judge action', 'Other text!');
			switch(vm.feature){
				
				default : 
					$ionicPlatform.ready(function() {
						$cordovaVibration.vibrate(100);
					});
					vm.result = "No match found input";
					break;
			}
		}
		
    };
})();