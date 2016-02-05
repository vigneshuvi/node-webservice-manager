/*
 * Author:     Vignesh Kumar
 * Copyright:  vigneshuvi
 * Date:	   04/02/2016
 * This file contains the Sample Web service for all request type of GET, POST, PUT, DELETE.
 */

'use strict';

var exports = module.exports = {};

exports.show = function(req, res) {
    try {
    	var requestId = req.params.id;
		console.log("Show requestId : "+ requestId);
        var resJson = {
			status : true,
			message : "successfully hit the SHOW sample webservice."
		}
		return res.status(200).send(resJson);
    } catch (exe) {
    	console.log("Exeception occured while access show webservice. \n Error :",exe);
        return res.sendStatus(404);
    }
};

exports.showall = function(req, res) {
    try {
        var resJson = {
			status : true,
			message : "successfully hit the SHOWALL sample webservice."
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
        var resJson = {
			status : true,
			message : "successfully hit the UPDATE sample webservice."
		}
		return res.status(200).send(resJson);
    } catch (exe) {
    	console.log("Exeception occured while access update webservice. \n Error :",exe);
        return res.sendStatus(404);
    }
};

exports.create = function(req, res) {
	try {
        var resJson = {
			status : true,
			message : "successfully hit the CREATE sample webservice."
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
        var resJson = {
			status : true,
			message : "successfully hit the DELETE sample webservice."
		}
		return res.status(200).send(resJson);
    } catch (exe) {
    	console.log("Exeception occured while access delete webservice. \n Error :",exe);
        return res.sendStatus(404);
    }
};