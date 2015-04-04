(function () {

    'use strict';

    angular.module('root')
	.controller('CordovaFileCtrl', ['toastr','$scope', '$ionicPlatform', '$cordovaFile', 'GlobalSettings', 'DSCacheFactory', CordovaFileCtrl]);

    function CordovaFileCtrl(toastr, $scope, $ionicPlatform, $cordovaFile, GlobalSettings, DSCacheFactory) {
        self.globalSettingCache = DSCacheFactory.get("globalSettingCache");

        var vm = this, rootPath = '', dirPath = "No input", filePath = "No input";
		// rootPath = cordova.file.applicationStorageDirectory + '/';	// applicationStorageDirectory is confusing.
		// rootPath = cordova.file.dataDirectory + '/';	// dataDirectory is persistent and private data storage.
		rootPath = '';
		
        vm.title = "Cordova :: file.html"; vm.result = "No input";

		// toast functions => success info error warning clear([toast])
		
		vm.judgeAction = function(){
			// toastr.success('in judge action', 'Other text!');
			switch(vm.feature){
				
				case "tcf":
					$ionicPlatform.ready(function() {
						toastr.info(cordova.file);
					});
					break;
					
				case "gfds":	
					$ionicPlatform.ready(function() {
						toastr.info('get Free Space func');
						
						cordova.exec(function(result) {
							// alert("Free Disk Space: " + result);
							toastr.info(result);
						}, function(error) {
							// alert("Error: " + error);
							toastr.info(error);
						}, "File", "getFreeDiskSpace", []);
						
					});
					break;
				
				case "chkdir":	
					document.addEventListener('deviceready', function () {
						toastr.info('Enter dirPath dir/other_dir in input1');
						dirPath = vm.input1;
						toastr.info('rootPath given is ' + rootPath);
						toastr.info('dirPath given is ' + dirPath);
						// dirPath = "dir/other_dir";
							
							$cordovaFile.checkDir(rootPath + dirPath)
							.then(function (success) {
									toastr.success('Operation Success');
							  }, function (error) {
									toastr.error('Operation not success');
							  });
							
					});
					break;
				
				case "crdir":	
					document.addEventListener('deviceready', function () {
						//testdir1
						toastr.info('Enter dirPath dir/other_dir or new_dir in input1');
						dirPath = vm.input1;
						toastr.info('rootPath given is ' + rootPath);
						toastr.info('dirPath given is ' + dirPath);

							$cordovaFile.createDir(rootPath + dirPath)
							.then(function (success) {
									toastr.success('Operation Success');
							  }, function (error) {
									toastr.error('Operation not success');
							  });

						
					});
					break;
				
				case "crf":	
					document.addEventListener('deviceready', function () {
						
						toastr.info('Enter dirPath dir/other_dir or new_dir in input1');
						dirPath = (vm.input1)? vm.input1 + '/' : '';
						toastr.info('Enter filePath new_file.txt in input2');
						filePath = vm.input2;
						//tfa.txt
						toastr.info('rootPath given is ' + rootPath);
						toastr.info('dirPath given is ' + dirPath);
						toastr.info('filePath given is ' + filePath);
						
						$cordovaFile.createFile(rootPath + dirPath + filePath, false)
							.then(function (success) {
									toastr.success('Operation Success');
							  }, function (error) {
									toastr.error('Operation not success');
							  });
							  
					});
					break;
				
				case "chkf":	
					document.addEventListener('deviceready', function () {
						toastr.info('Enter dirPath dir/other_dir or new_dir in input1');
						dirPath = (vm.input1)? vm.input1 + '/' : '';
						toastr.info('Enter filePath new_file.txt in input2');
						filePath = vm.input2;
						
						toastr.info('rootPath given is ' + rootPath);
						toastr.info('dirPath given is ' + dirPath);
						toastr.info('filePath given is ' + filePath);
						
						$cordovaFile.checkFile(rootPath + dirPath + filePath)
							.then(function (success) {
									toastr.success('Operation Success');
							  }, function (error) {
									toastr.error('Operation not success');
							  });
						// dirPath = "dir/other_dir";
					});
					break;
					
					
				case "rmdir":	
					document.addEventListener('deviceready', function () {
						toastr.info('Enter dirPath dir/other_dir or new_dir in input1');
						dirPath = vm.input1;
						$cordovaFile.removeDir(rootPath + dirPath)
						  .then(function (success) {
								toastr.success('Dir removed');	
						  }, function (error) {
								toastr.error('Directory no removed');
						  });
					});
					break;
					
				case "rmf":	
					document.addEventListener('deviceready', function () {
						toastr.info('Enter filePath dir/some_file.txt or some_file.txt in input2');
						filePath = vm.input2;
						$cordovaFile.removeFile(rootPath + filePath)
							  .then(function (success) {
								// success
									toastr.success('Operation Success');		
							  }, function (error) {
								// error
									toastr.error('Operation Fail');
							  });
					});
					break;
					
				case "rr":	
					document.addEventListener('deviceready', function () {
						toastr.info('Enter dirPath dir/other_dir or new_dir in input1');
						dirPath = vm.input1;
						$cordovaFile.removeRecursively(rootpath + dirPath)
						  .then(function (success) {
							// success
								toastr.success('Operation Success');		
						  }, function (error) {
							// error
								toastr.error('Operation Fail');
						  });
					});
					break;

				
				case "wf":	
					$ionicPlatform.ready(function() {
						toastr.info('Enter filePath dir/file.txt or file.txt in input2');
						toastr.info('Replaces file with same name is set to TRUE');
						dirPath = vm.input2;

						toastr.info('Enter data text in input3');
						filePath = {"user":{"name":"errer","email":"sdsdff@gmail.com","username":"sdfsdfsd"}};
						
						// $cordovaFile.writeFile('user.json', data, {'append':false})
						$cordovaFile.writeFile(( rootPath, dirPath, filePath, {'append':false} ))
						  .then(function (success) {
								toastr.success('Operation Success');
								toastr.success(success);
						  }, function (error) {
								toastr.error('Operation Fail');
								toastr.error(error);
						  });
					});
					break;
				
				case "lf1":	
					$ionicPlatform.ready(function() {
						toastr.info('Enter filePath dir/file.txt or file.txt in input2');
						toastr.info('Replaces file with same name is set to TRUE');
						dirPath = vm.input2;

						dirPath = "tfa.txt";
						filePath = "Sample Text";
						
						function writeToFile() {
							window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
						}
						// put this file in the root of the device's file system
						function gotFS(fileSystem) {
							fileSystem.root.getFile(dirPath, {create: true, exclusive: false}, gotFileEntry, fail);
						}
						function gotFileEntry(fileEntry) {
							fileEntry.createWriter(gotFileWriter, fail);
						}

						function gotFileWriter(writer) {
							// var form = document.getElementById('myForm'); // get the form
							// var userText = form.userInput.value; // get the text field value
							writer.seek(writer.length); // get the length of the file; go to end
							writer.write('\n\n' + filePath); // skip a space and start writing
							writer.onwriteend = function(evt){
								toastr.success("You wrote ' " + filePath + " ' at the end of the file.");
								// alert("You wrote ' " + filePath + " ' at the end of the file.");
							} 
							// form.userInput2.value = "";
							// readTheFile(); // show new file contents
						}
						// ******* delete the file contents **********
						function deleteContents() {
							window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS3, fail);
						}
						// get this file in the root of the device's file system
						function gotFS3(fileSystem) {
							fileSystem.root.getFile(dirPath, {create: false, exclusive: false}, gotFileEntry3, fail);
						}
						function gotFileEntry3(fileEntry) {
							fileEntry.createWriter(gotFileWriter3, fail);
						}

						function gotFileWriter3(writer) {
							writer.onwriteend = function(evt) {
								writer.truncate(writer.length); // truncate entire file
								writer.onwriteend = function(evt) {
									writer.seek(0); // start at beginning of file
									writer.write(""); // add no content
									writer.onwriteend = function(evt){
										toastr.info("You deleted the file contents.");
										// alert("You deleted the file contents.");
									}
									readTheFile(); // show file contents
								};
							};
							writer.write(""); 
						}
						function fail(error) {
							console.log(error.code);
						}
						
						
						writeToFile();
						
						
						function readTheFile() {
							window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS2, fail);
						}

						function gotFS2(fileSystem) {
							fileSystem.root.getFile(dirPath, null, gotFileEntry2, fail);
						}
						function gotFileEntry2(fileEntry) {
							fileEntry.file(gotFile2, fail);
						}
						function gotFile2(file){
							readDataUrl(file);
							readAsText(file);
						}

						// puts the txt contents on the page as data URL
						function readDataUrl(file) {
							var reader = new FileReader();
							reader.onloadend = function(evt) {
								toastr.success('read Data url on load end');
								toastr.inf(evt.target.result);
								// var element = document.getElementById('data1');
								// element.innerHTML = '<strong>Read as data URL:</strong> <br><pre>' + evt.target.result + '</pre>';
							};
							reader.readAsDataURL(file);
						}
						// puts the txt contents on the page as data text
						function readAsText(file) {
							var reader = new FileReader();
							reader.onloadend = function(evt) {
								var element = document.getElementById('data2');
								element.innerHTML = '<strong>Read as data text:</strong> <br><pre>' + evt.target.result + '</pre>';
							};
							reader.readAsText(file);
						}
					});
					break;
					
				case "wfa":	
					document.addEventListener('deviceready', function () {
						toastr.info('Enter filePath dir/file.txt or file.txt in input2');
						toastr.info('Replaces file with same name is set to TRUE');
						dirPath = vm.input2;

						toastr.info('Enter data text in input3');
						filePath = {"user":{"name":"errer","email":"sdsdff@gmail.com","username":"sdfsdfsd"}};
						
						// $cordovaFile.writeFile('user.json', data, {'append':false})
						$cordovaFile.writeFile(( dirPath, filePath, {'append':true} ))
						  .then(function (success) {
								toastr.success('Operation Success');
								toastr.success(success);
						  }, function (error) {
								toastr.error('Operation Fail');
								toastr.error(error);
						  });
					});
					break;
					
				case "wef":	
					document.addEventListener('deviceready', function () {
						
						toastr.info('Enter filePath dir/file.txt or file.txt in input2');
						dirPath = vm.input2;
						toastr.info('Enter data text in input3');
						filePath = vm.input3;
						
						// writeExistingFile(path + file, data)
						$cordovaFile.writeExistingFile(rootPath + dirPath, filePath)
						  .then(function (success) {
								toastr.success('Operation Success');
						  }, function (error) {
								toastr.error('Operation Fail');
						  });
					});
					break;
					
				case "rat":	
					document.addEventListener('deviceready', function () {
						toastr.info('Enter filePath dir/file.txt or file.txt in input2');
						filePath = vm.input2;
						$cordovaFile.readAsText(rootPath + filePath)
						  .then(function (success) {
								toastr.success('Operation Success');
								toastr.info(success);
								vm.result = success;
						  }, function (error) {
								toastr.error('Operation Fail');
								vm.result = error;
						  });
					});
					break;

					
				case "mvd":	
					document.addEventListener('deviceready', function () {
						toastr.info('Enter source dirPath dir/other_dir or new_dir in input1');
						dirPath = vm.input1;
						toastr.info('Enter destination dirPath dir/other_dir or new_dir in input2');
						filePath = vm.input2;
						$cordovaFile.moveDir(rootPath, dirPath, rootPath, filePath)
						  .then(function (success) {
								toastr.success('Operation Success');
						  }, function (error) {
								toastr.error('Operation Fail');
						  });
					});
					break;
					
				case "df":	
					document.addEventListener('deviceready', function () {
						toastr.info('Enter filePath dir/file.txt or file.txt in input2');
						filePath = vm.input2;
						$cordovaFile.moveFile(rootPath, filePath, cordova.file.tempDirectory)
						  .then(function (success) {
								toastr.success('Operation Success');
						  }, function (error) {
								toastr.error('Operation Fail');
						  });
					});
					break;
					
				case "cpd":	
					document.addEventListener('deviceready', function () {
						toastr.info('Enter source dirPath dir/other_dir or new_dir in input1');
						dirPath = vm.input1;
						toastr.info('Enter destination dirPath dir/other_dir or new_dir in input2');
						filePath = vm.input2;
						$cordovaFile.copyDir(rootDir, dirPath, rootDir, filePath)
						  .then(function (success) {
								toastr.success('Operation Success');
						  }, function (error) {
								toastr.error('Operation Fail');
						  });
					});
					break;
					
				case "cpf":	
					document.addEventListener('deviceready', function () {
						toastr.info('Enter source filePath dir/file.txt or file.txt in input2');
						dirPath = vm.input2;
						toastr.info('Enter destination filePath dir/file.txt or file.txt in input3');
						filePath = vm.input3;
						$cordovaFile.copyFile(rootPath,dirPath, rootPath,filePath)
						  .then(function (success) {
								toastr.success('Operation Success');
						  }, function (error) {
								toastr.error('Operation Fail');
						  });
					});
					break;
			
				case "asd": 
					// vm.result = "asd";
					toastr.info('cordova.file.applicationStorageDirectory');
					vm.result = cordova.file.applicationStorageDirectory;	
					break;
				
				case "cd": 
					// vm.result = "cd";
					toastr.info('cordova.file.cacheDirectory');
					vm.result = cordova.file.cacheDirectory;	
					break;
				
				case "dd": 
					// vm.result = "dd";
					toastr.info('cordova.file.dataDirectory');
					vm.result = cordova.file.dataDirectory;	
					break;
				
				case "erd": 
					vm.result = "erd";
					toastr.info('cordova.file.externalRootDirectory');
					vm.result = cordova.file.externalRootDirectory;	
					break;
				
				case "easd": 
					// vm.result = "easd";
					toastr.info('cordova.file.externalApplicationStorageDirectory');
					vm.result = cordova.file.externalApplicationStorageDirectory;	
					break;
				
				
				default : vm.result = "No match found input";
						break;
			}
		}
    };
})();

// Code	Constant
// 1	NOT_FOUND_ERR
// 2	SECURITY_ERR
// 3	ABORT_ERR
// 4	NOT_READABLE_ERR
// 5	ENCODING_ERR
// 6	NO_MODIFICATION_ALLOWED_ERR
// 7	INVALID_STATE_ERR
// 8	SYNTAX_ERR
// 9	INVALID_MODIFICATION_ERR
// 10	QUOTA_EXCEEDED_ERR
// 11	TYPE_MISMATCH_ERR
// 12	PATH_EXISTS_ERR

// cordova.exec(function(winParam) {},
	 // function(error) {},
	 // "service",
	 // "action",
	 // ["firstArgument", "secondArgument", 42, false]);
	 
	
// $scope.DownloadFile = function(URL,Filename,dldPrg) {
  // $cordovaFile
    // .downloadFile(URL, cordova.file.documentsDirectory+Filename, true)
    // .then(function(result) {
      // // Success!
      // alert('Worked!'); 
      // $scope.dldPrg.splice($scope.dldPrg.indexOf(dldPrg));
    // }, function(err) {
      // // Error
      // alert(JSON.stringify(err));

      // $scope.dldPrg.splice($scope.dldPrg.indexOf(dldPrg));
    // }, function (progress) {
      // $scope.dldPrg.push(dldPrg);
      // // constant progress updates

    // });//End cordovaFile

  // }//End DownloadFile
	
	 
	 
	 