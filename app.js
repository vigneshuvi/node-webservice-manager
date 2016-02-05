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
	https = require('https'),
	http = require('http'),
	fs = require('fs'),
	ejs = require('ejs'),
	bodyParser = require('body-parser'),
	path = require('path'),
	favicon = require('serve-favicon'),
	app = express();

// Set the Web service configuration based on Environment.
var wsConfig = config.getConfig(), validateType = null;


app.set('title', wsConfig.title);	// Set the Application title
app.use(bodyParser.json());	// for parsing application/json

app.engine('.html', ejs.__express); // Set the ejs engine in Express
app.set('view engine', 'ejs');		// Set the Engine view
app.use(express.static('./public'));
app.set('views', path.join(__dirname, 'public')); // Set the views path

//app.use(favicon(__dirname + '/public/favicon.ico'));

// Response the Home Url
app.get('/',function(req,res){
    res.render('index', { title: wsConfig.title });
});


// Response the Home Url
app.get('/'+wsConfig.version+'/u1v2i3C4o5n6f7i8g9', function(req,res) {
    try {
        var resJson = {
			status : true,
			message : "successfully hit the config webservice.",
			environment : process.env.NODE_ENV
		}
		return res.status(200).send(resJson);
    } catch (exe) {
    	console.log("Exeception occured while access u1v2i3C4o5n6f7i8g9 webservice. \n Error :",exe);
        return res.sendStatus(404);
    }
});

// Web Service Authendication validate
if(wsConfig.auth === "required") {
	validateType = auth.authentication;
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

// Validate the https first, if it is enable, just create a https server alone.
if(wsConfig.https.enable) {

	//	Certificate, Private key and CA certificates to use for SSL. Default null.
	//	key:Private key to use for SSL. Default null.
	//	cert: Public x509 certificate to use. Default null.
	/**
	Sample formate
	const options = {
	  	key: fs.readFileSync(wsConfig.https.options.key),
	  	cert: fs.readFileSync(wsConfig.https.options.cert)
	};
	**/

	const options = {
	  	key: null,
	  	cert: null
	};

	// Listen the environment port number
	https.createServer(options, app).listen(wsConfig.https.port, function () {
	  	console.log('Example HTTPS app listening on port '+wsConfig.https.port+'!');
	});
} else {
	// Listen the environment port number
	if(wsConfig.http.enable) {
		http.createServer(app).listen(wsConfig.http.port, function () {
		  console.log('Example HTTP app listening on port '+wsConfig.http.port+'!');
		});
	}
}


// Exit or Kill node 
process.on('exit', function (){
  console.log('Goodbye!');
});