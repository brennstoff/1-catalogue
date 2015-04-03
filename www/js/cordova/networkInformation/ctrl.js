(function () {
    'use strict';
    angular.module('root')
		.controller('CordovaNetworkInformationCtrl', ['$rootScope','$cordovaNetwork',  'DSCacheFactory',CordovaNetworkInformationCtrl]);
    function CordovaNetworkInformationCtrl($rootScope,$cordovaNetwork,DSCacheFactory) {
        
		self.globalSettingCache = DSCacheFactory.get("globalSettingCache");

        var vm = this;
		
        vm.title = "Cordova :: NetworkInformation.html"; vm.result = "No input";
		// toast functions => success info error warning clear([toast])
		
		vm.judgeAction = function(){
			toastr.success('in judge action', 'Other text!');
			switch(vm.feature){
				
				case "gn":
					$ionicPlatform.ready(function() {
						toastr.info("$cordovaNetwork.getNetwork()");
						toastr.info($cordovaNetwork.getNetwork());
					});
					break;
				
				case "ion":
					$ionicPlatform.ready(function() {
						toastr.info("$cordovaNetwork.isOnline()");
						toastr.info($cordovaNetwork.isOnline());
					});
					break;
				
				case "iof":
					$ionicPlatform.ready(function() {
						toastr.info("$cordovaNetwork.isOffline()");
						toastr.info($cordovaNetwork.isOffline());
					});
					break;
				
				default : vm.result = "No match found input";
						break;
			}
		}
		
		// listen for Online event, which is fired when the phone goes Online.
		$rootScope.$on('$cordovaNetwork:online', function(event, networkState){
			var onlineState = networkState;
			toastr.info(onlineState);
		})

		// listen for Offline event, which is fired when the phone goes Offline.
		$rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
			var offlineState = networkState;
			toastr.info(offlineState);
		})
		
    };
})();