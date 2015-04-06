(function () {
    'use strict';
    angular.module('root')
		.controller('CordovaNetworkInformationCtrl', 
			['toastr','$ionicPlatform', '$rootScope','$cordovaNetwork','DSCacheFactory',CordovaNetworkInformationCtrl]);
    function CordovaNetworkInformationCtrl(toastr, $ionicPlatform, $rootScope, $cordovaNetwork, DSCacheFactory) {
        
		self.globalSettingCache = DSCacheFactory.get("globalSettingCache");

        var vm = this;
		
        vm.title = "Cordova :: NetworkInformation.html"; vm.result = "No input";
		// toast functions => success info error warning clear([toast])
		
		vm.judgeAction = function(){
		
			toastr.info('in judge action', 'Other text!');
			switch(vm.feature){
				
				case "gn": // tested getNetwork see all codes at last of this page
					$ionicPlatform.ready(function() {
						toastr.info("$cordovaNetwork.getNetwork()");
						toastr.info($cordovaNetwork.getNetwork());
					});
					break;
				
				case "ion": // tested isOffline
					$ionicPlatform.ready(function() {
						toastr.info("$cordovaNetwork.isOnline()");
						toastr.info($cordovaNetwork.isOnline());
					});
					break;
				
				case "iof": // tested getNetwork
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

// getNetwork()

	// This property offers a fast way to determine the device's network connection state, and type of connection.

		// Returns Connection Object:

			// Connection Type	Description
			// Connection.UNKNOWN	Unknown connection
			// Connection.ETHERNET	Ethernet connection
			// Connection.WIFI	WiFi connection
			// Connection.CELL_2G	Cell 2G connection
			// Connection.CELL_3G	Cell 3G connection
			// Connection.CELL_4G	Cell 4G connection
			// Connection.CELL	Cell generic connection
			// Connection.NONE	No network connection
			
			
			