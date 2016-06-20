/*
 * Author:     Vignesh Kumar
 * Copyright:  vigneshuvi
 * Date:	   04/02/2016
 * This file contains the register the web service modules and its file path.
 */


'use strict';

module.exports = {
	webservices: [
		{
			name : "sample",
			methods : require('./services/v1/sample/sample')
		},
		{
			name : "user",
			methods : require('./services/v1/user/user')
		}
	]
};