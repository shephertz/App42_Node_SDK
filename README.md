App42_Node_SDK
==============

1. [Register] (https://apphq.shephertz.com/register) with App42 platform.
2. Create an app once you are on Quick start page after registration.
3. If you are already registered, login to [AppHQ] (http://apphq.shephertz.com/register/app42Login) console and create an app from App Manager Tab.

__Download And Set Up SDK :-__

1). [Download] (https://github.com/shephertz/App42_Node_SDK/archive/master.zip) NodeJS SDK

2). Unzip downloaded Zip file. Unzip folder contains lib folder and sample folder

3). Lib folder will contain all js files

4). Add lib folder in your sample project & integrate the App42 APIs
 
__Initializing SDK :-__
You have to instantiate App42 by putting your ApiKey/SecretKey to initialize the SDK.

```
App42.initialize("API_KEY", "SECRET_KEY");
```

__Using App42 Services :-__
 you have to build target service that you want to use in your app. For example, User Service can be build with following snippet. Similarly you can build other service also with same notation.
 
```
var userService = App42.buildUserService();
//Similarly you can build other services like App42API.buildXXXXService()
```
