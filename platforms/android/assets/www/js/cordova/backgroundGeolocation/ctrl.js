(function () {
    'use strict';
    angular.module('root').controller('CordovaBackgroundGeolocationCtrl', ['$cordovaBackgroundGeolocation', 'GlobalSettings', 'DSCacheFactory', CordovaBackgroundGeolocationCtrl]);
    function CordovaBackgroundGeolocationCtrl($cordovaBackgroundGeolocation, GlobalSettings, DSCacheFactory) {
        
		self.globalSettingCache = DSCacheFactory.get("globalSettingCache");

        var vm = this;
		
        vm.title = "Cordova :: BackgroundGeolocation.html"; vm.result = "No input";
		// toast functions => success info error warning clear([toast])
		
		vm.judgeAction = function(){
			toastr.success('in judge action', 'Other text!');
			switch(vm.feature){
				
				case "bg":
					$ionicPlatform.ready(function() {
						toastr.info("bg");
						 $cordovaBackgroundGeolocation.configure(options)
							.then(
								  null, // Background never resolves
								  function (err) { // error callback
										toastr.success('Operation Success');
										toastr.error(err);
								  },
								  function (location) { // notify callback
										toastr.success('Operation Fail');
										toastr.info(location);
							});
					});
					break;
				
				case "stop":
					$ionicPlatform.ready(function() {
						toastr.info("stop");
						$cordovaBackgroundGeolocation.stop();
					});
					break;
				
				default : vm.result = "No match found input";
						break;
			}
		}
		
    };
})();