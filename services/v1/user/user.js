/*
 * Author:     Vignesh Kumar
 * Copyright:  vigneshuvi
 * Date:	   04/02/2016
 * This file contains the User Web service for all request type of GET, POST, PUT, DELETE.
 */

'use strict';

var userBean = require('./model/userBean');

var exports = module.exports = {};

exports.show = function(req, res) {
    try {
    	var requestId = req.params.id;
		console.log("Show requestId : "+ requestId);
		var userObject = new Object();
		userObject.firstname = "vignesh";
		userObject.lastname = "kumar";
		userObject.username = "vigneshuvi";
        var resJson = {
			status : true,
			data: userObject,
			message : "successfully hit the SHOW user webservice."
		}
		return res.status(200).send(resJson);
    } catch (exe) {
    	console.log("Exeception occured while access show webservice. \n Error :",exe);
        return res.sendStatus(404);
    }
};

exports.showall = function(req, res) {
    try {
    	// create User object array.
        var userObjectArray = []
        // First user
		var userObject = new Object();
		userObject.firstname = "vignesh";
		userObject.lastname = "kumar";
		userObject.username = "vigneshuvi";

		userObjectArray.push(userObject);

		// Secound user
		var userObject = new Object();
		userObject.firstname = "vinoth";
		userObject.lastname = "kumar";
		userObject.username = "vinouvi";

		userObjectArray.push(userObject);

		var resJson = {
			status : true,
			data: userObjectArray,
			message : "successfully hit the SHOWALL user webservice."
		}
		return res.status(200).send(resJson);
    } catch (exe) {
    	console.log("Exeception occured while access showall webservice. \n Error :",exe);
        return res.sendStatus(404);
    }
};
   
exports.update = function(req, res) {
	try {
		var requestId = req.params.id;
		console.log("Update requestId : "+ requestId);

		// Create a User object.
		var userObject = new Object();
		userObject.firstname = "vignesh";
		userObject.lastname = "kumar";
		userObject.username = "vigneshuvi";

        var resJson = {
			status : true,
			data: userObject,
			message : "successfully hit the UPDATE user webservice."
		}
		return res.status(200).send(resJson);
    } catch (exe) {
    	console.log("Exeception occured while access update webservice. \n Error :",exe);
        return res.sendStatus(404);
    }
};

exports.create = function(req, res) {
	try {
		// Create a User object.
		var userObject = new Object();
		userObject.firstname = "vignesh";
		userObject.lastname = "kumar";
		userObject.username = "vigneshuvi";
        var resJson = {
			status : true,
			data: userObject,
			message : "successfully hit the CREATE user webservice."
		}
		return res.status(200).send(resJson);
    } catch (exe) {
    	console.log("Exeception occured while access create webservice. \n Error :",exe);
        return res.sendStatus(404);
    }
};

exports.delete = function(req, res) {
	try {
		var requestId = req.params.id;
		console.log("Delete requestId : "+ requestId);
		// Create a User object.
		var userObject = new Object();
		userObject.firstname = "vignesh";
		userObject.lastname = "kumar";
		userObject.username = "vigneshuvi";

        var resJson = {
			status : true, 
			data: userObject,
			message : "successfully hit the DELETE user webservice."
		}
		return res.status(200).send(resJson);
    } catch (exe) {
    	console.log("Exeception occured while access delete webservice. \n Error :",exe);
        return res.sendStatus(404);
    }
};