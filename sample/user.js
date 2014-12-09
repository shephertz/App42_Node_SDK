var App42 = require("../lib/app42");
var App42Log = require("../lib/app42Log");

var apiKey = "API_KEY"
var secretKey = "SECRET_KEY"
var userName = "demoUser";  
var pwd = "demoPassword";  
var emailId = "demo.emailId@shephertz.co.in"; 
	
	
function onUserOperationCompleted(object){
	var result_JSON = JSON.parse( object );
	if(result_JSON.app42){
		var user = result_JSON.app42.response.users.user
		console.log("User Name is : ",user.userName)
		console.log("Email Id is : ",user.email)
		console.log("SessionId is : ",user.sessionId)
		console.log("Created On is : ",user.createdOn)
	}else{
		console.log("Error Message is: ", result_JSON.app42Fault.message)
		console.log("Error Detail is: ", result_JSON.app42Fault.details)
		console.log("Error Code is: ", result_JSON.app42Fault.appErrorCode)
	}
}

function onRequest(request, response) {
	App42.initialize(apiKey, secretKey);
	var userService = App42.buildUserService()
	App42Log.setDebug(true)
	userService.createUser(userName, pwd,emailId, onUserOperationCompleted)
  
}

onRequest();
