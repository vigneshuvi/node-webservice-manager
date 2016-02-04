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
    		if (header.authorization === "bypass") {
				next();
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

