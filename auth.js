/*
 * Author:     Vignesh Kumar
 * Copyright:  vigneshuvi
 * Date:	   04/02/2016
 * This file contains the authendication logics.
 */

'use strict';

var exports = module.exports = {};

exports.authendication = function(req, res, next) {
    try {
    	console.log("Web service are validating");
		var header = req.headers;
    	if(header && header.date && header.authorization) {
            var timeStart = parseFloat(header.date);
            var timeEnd = new Date().getTime();
            var minDiff = (timeEnd - timeStart) / 60 / 1000; //in minutes
    		if (header.authorization === "bypass" && minDiff <= 30) {
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
        return res.sendStatus(404);
    }
};

exports.bypass = function(req, res, next) {
    try {
    	console.log("Web service are Bypassed");
		next();
    } catch (exe) {
        return res.sendStatus(404);
    }
};

