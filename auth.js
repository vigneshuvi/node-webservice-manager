/*
 * Author:     Vignesh Kumar
 * Copyright:  vigneshuvi
 * Date:	   04/02/2016
 * This file contains the authentication logics.
 */

'use strict';

var exports = module.exports = {};

// This function contains the basic validation for Auth token and header format.
exports.authentication = function(req, res, next) {
    try {
    	console.log("Web service are validating");
		var header = req.headers;
    	if(header && header.date && header.authorization) {
            var timeStart = parseFloat(header.date);
            var timeEnd = new Date().getTime();
            var minDiff = (timeEnd - timeStart) / 60 / 1000;            //in minutes
    		if (header.authorization === "bypass" && minDiff <= 30) {   // Validate the auth token and web service request time. 
				next();
    		} else if (minDiff > 30) {
                var resJson = {
                    status : false,
                    message : "Web service request is bad type."
                }
                return res.status(404).send(resJson);
    		} else {
                return res.sendStatus(404);
            }
    	} else {
    		return res.sendStatus(404);
    	}
    } catch (exe) {
        console.log("Exeception occured while validate the request headers. \n Error :",exe);
        return res.sendStatus(404);
    }
};

// This function helps to by-pass the basic authentication.
exports.bypass = function(req, res, next) {
    try {
    	console.log("Web service are Bypassed");
		next();
    } catch (exe) {
        console.log("Exeception occured while bypass the request headers. \n Error :",exe);
        return res.sendStatus(404);
    }
};

