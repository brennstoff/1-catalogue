(function () {
    'use strict';
    angular.module('root').controller('CordovaGeolocationCtrl', ['toastr','$ionicPlatform','$cordovaGeolocation', 'DSCacheFactory', CordovaGeolocationCtrl]);
    function CordovaGeolocationCtrl(toastr, $ionicPlatform, $cordovaGeolocation, DSCacheFactory) {
        
		self.globalSettingCache = DSCacheFactory.get("globalSettingCache");

        var vm = this;
		
        vm.title = "Cordova :: geolocation.html"; vm.result = "No input";
		// toast functions => success info error warning clear([toast])
		
		vm.judgeAction = function(){
			toastr.success('in judge action', 'Other text!');
			switch(vm.feature){
				case "gcp": //tested getCurrentPosition device for given options
					$ionicPlatform.ready(function() {
						toastr.info('getCurrentPosition');
						var posOptions = {timeout: 10000, enableHighAccuracy: false};
						$cordovaGeolocation
							.getCurrentPosition(posOptions)
							.then(function (position) {
								toastr.success('Operation Success');
								var lat  = position.coords.latitude;
								var long = position.coords.longitude;
								toastr.info('Latitude for device is ' + lat);
								toastr.info('Longitude for device is ' + long);
							}, function(err) {
							  // error
								toastr.error('Operation Error');
								toastr.error(err);
							});
					});
					break;
				
				case "wp": //	watch clear (not tested)
					$ionicPlatform.ready(function() {
						toastr.info('Watch Position of device');
						
						var watchOptions = {
							frequency : 1000,
							timeout : 3000,
							enableHighAccuracy: false // may cause errors if true
						 };

						var watch = $cordovaGeolocation.watchPosition(watchOptions);
						
						watch.then(
							null,
							function(err) {
							  // error
								toastr.error(err);
							},
							function(position) {
								toastr.success('Operation Success');
								var lat  = position.coords.latitude
								var long = position.coords.longitude
								toastr.info('Latitude for device is ' + lat);
								toastr.info('Longitude for device is ' + long);
						});

					});
					break;
				
				case "wc": //	watch clear (not tested)
					$ionicPlatform.ready(function() {
						toastr.info('Watch Clear of device');
						
						var watchOptions = {
							frequency : 1000,
							timeout : 3000,
							enableHighAccuracy: false // may cause errors if true
						};

						var watch = $cordovaGeolocation.watchPosition(watchOptions);
						
						// watch.clearWatch();
						  // OR
						$cordovaGeolocation.clearWatch(watch)
							.then(function(result) {
							  // success
								toastr.success('Watch cleared');
								toastr.success(result);
							}, function (error) {
							  // error
								toastr.error('Watch no cleared');
								toastr.error(error);
							});
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