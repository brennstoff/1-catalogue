(function () {
    'use strict';
    angular.module('root').controller('CordovaEmailComposerCtrl', ['$cordovaEmailComposer', 'GlobalSettings', 'DSCacheFactory', CordovaEmailComposerCtrl]);
    function CordovaEmailComposerCtrl($cordovaEmailComposer, GlobalSettings, DSCacheFactory) {
        
		self.globalSettingCache = DSCacheFactory.get("globalSettingCache");

        var vm = this;
		
        vm.title = "Cordova :: emailComposer.html"; vm.result = "No input";
		// toast functions => success info error warning clear([toast])
		
		vm.judgeAction = function(){
			toastr.success('in judge action', 'Other text!');
			switch(vm.feature){
				
				case "tcf":
					$ionicPlatform.ready(function() {
						toastr.info("tcf");
						$cordovaEmailComposer.isAvailable().then(function() {
						   // is available
							toastr.success('Operation Success');
						}, function () {
						   // not available
						   toastr.error('Operation Fail');
						});
					});
					break;
				
				
				
				default : vm.result = "No match found input";
						break;
			}
		}
		
    };
})();