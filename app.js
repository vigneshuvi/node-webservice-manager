/*
 * Author:     Vignesh Kumar
 * Copyright:  vigneshuvi
 * Date:	   04/02/2016
 * This file contains the web service environment configuration and register the services and authentications.
 */

'use strict';

// var config = require("./config.json"); 
var express = require('express'),
	serviceConfig = require('./webservice'),
	auth = require('./auth'),
	config = require('./config.js'),
	app = express();

// Set the Web service configuration based on Environment.
var wsConfig = config.getConfig(), validateType = null;

console.log(JSON.stringify(wsConfig));

// Set the Application title
app.set('title', wsConfig.title);

// Set content type GLOBALLY for any response.
app.use(function (req, res, next) {
	res.header("Content-Type",'application/json');
	next();
});

// Home Url.
app.get('/', function (req, res) {
	res.send(wsConfig.title);
});

// Web Service Authendication validate
if(wsConfig.auth === "required") {
	validateType = auth.authendication;
} else {
	validateType = auth.bypass;
}


// Register the Web service.
if (serviceConfig && serviceConfig.webservices && serviceConfig.webservices.length > 0) {
	try {
		var registerService = serviceConfig.webservices;			// Get the Register Web service module list.
		for (var api in registerService) {
			var registerServiceName = registerService[api].name;	
			var service = registerService[api].methods;				// Get the all register Web service methods.
			var url = "/"+wsConfig.version+"/"+registerServiceName;	// Form the web service user based on module and API version.
			for (var servicename in service) {
				var name = servicename.toString();
				var method = service[servicename];
				if (name === "show") {   							//<webserver>/webservice/:id 	GET
			  		app.get(url+"/:id", validateType, method);
			 	} else if (name === "showall") { 					//<webserver>/webservice 		GET 
					app.get(url, validateType, method);
			  	} else if (name === "update") { 					//<webserver>/webservice/:id 	PUT
					app.put(url+"/:id", validateType, method);
			  	} else if (name === "create") {						//<webserver>/webservice 		POST
			  		app.post(url, validateType, method);
			  	} else if (name === "delete") {						//<webserver>/webservice/:id 	DELETE
			  		app.delete(url+"/:id", validateType, method);
			  	}
			}
		}
	} catch ( exe ) {
		console.log("Exeception occured while register webservices. \n Error :",exe);
	}
}

// Listen the environment port number
app.listen(wsConfig.http.port, function () {
  console.log('Example app listening on port '+wsConfig.http.port+'!');
});


// Exit or Kill node 
process.on('exit', function (){
  console.log('Goodbye!');
});