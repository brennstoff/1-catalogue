(function () {
    
	'use strict';
    
	angular.module('root').controller('CordovaPanelCtrl', ['$state', '$ionicHistory', '$cordovaDevice', 'GlobalSettings', 'DSCacheFactory', CordovaPanelCtrl]);
	
    function CordovaPanelCtrl($state, $ionicHistory, $cordovaDevice, GlobalSettings, DSCacheFactory) {
//        self.globalSettingCache = DSCacheFactory.get("globalSettingCache");
        
		var vm = this;
        vm.title = "Cordova :: panel.html";
     
        vm.items = [
			{ 'name': 'Device', 'link':'cordova.device'},
			{ 'name': 'Device Orientation : in construction', 'link':'cordova.deviceOrientation'},
			{ 'name': 'Dialogs : in construction', 'link':'cordova.dialogs'},
			{ 'name': 'Email Composer : in construction', 'link':'cordova.emailComposer'},
			{ 'name': 'File', 'link':'cordova.file'},
			{ 'name': 'File Opener 2 : in construction', 'link':'cordova.fileOpener2'},
			{ 'name': 'File Transfer : in construction', 'link':'cordova.fileTransfer'},
			{ 'name': 'Geolocation', 'link':'cordova.geolocation'},
			{ 'name': 'Image Picker : in construction', 'link':'cordova.imagePicker'},
			{ 'name': 'Local Notification : in construction', 'link':'cordova.localNotification'},
			{ 'name': 'Media : in construction', 'link':'cordova.media'},
			{ 'name': 'Native Audio : in construction', 'link':'cordova.nativeAudio'},
			{ 'name': 'Network Information', 'link':'cordova.networkInformation'},			
			{ 'name': 'O Auth : in construction', 'link':'cordova.Oauth'},
			{ 'name': 'Push : in construction', 'link':'cordova.push'},
			{ 'name': 'Social Sharing : in construction', 'link':'cordova.socialSharing'},
			{ 'name': 'Vibration', 'link':'cordova.vibration'}
	    ];      

    };
})();