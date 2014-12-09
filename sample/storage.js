var App42 = require("../lib/app42");
var App42Service = require("../lib/app42Service");
var App42Log = require("../lib/app42Log");

var apiKey = "API_KEY"
var secretKey = "SECRET_KEY"
var dbName = "Data base name";  
var collectionName = "collection name";    

function onStorageOperationCompleted(object){
  var result_JSON = JSON.parse( object );
	if(result_JSON.app42){
		var storage = result_JSON.app42.response.storage
		console.log("Data base Name is : ",storage.dbName)
		console.log("Collection Name is : ",storage.collectionName)
		console.log("Doc Id is : ",storage.jsonDoc._id.$oid)
		console.log("Created At is : ",storage.jsonDoc._$createdAt)
		console.log("Updated At is : ",storage.jsonDoc._$updatedAt)
	}else{
		console.log("Error Message is: ", result_JSON.app42Fault.message)
		console.log("Error Detail is: ", result_JSON.app42Fault.details)
		console.log("Error Code is: ", result_JSON.app42Fault.appErrorCode)
	}
}

function onRequest(request, response) {
	App42.initialize(apiKey, secretKey);
	var storageService = App42.buildStorageService()
	App42Log.setDebug(true)
	var jsonDoc  = new Object()
	jsonDoc.name = "Nick"
	jsonDoc.age = 24
	storageService.insertJSONDocument(dbName, collectionName, jsonDoc, onStorageOperationCompleted)
}

onRequest();
