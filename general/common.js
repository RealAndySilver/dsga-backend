/**
 * @common.js 
 * File dedicated to manage common functions.
 * Author: Andrés Abril
 * © 2016, Emerson Electric Co
 */

//////////////////////////
///// Dependencies ///////
//////////////////////////
var fs = require("fs");
//var steam_logic = require('../steam_logic/steam_logic');
//////////////////////////
///End of Dependencies ///
//////////////////////////

////////////////////
/////// Vars ///////
//*avoid hoisting*//
////////////////////
//Common 
var common = {};
////////////////////
////End of Vars ////
////////////////////

common.list = function(){
	var list =  [];
	var pumps = {
		id : 1,
		active : 1,
		data : {
			settings : {
				"Points X Req" : 1,
				"endpoint" : 'http://ENDPOINT_URL_AND_PORT_HERE/'
/*
				A3 : 3,
				B1 : 11,
				B2 : 22,
				B3 : 33
*/
			},
			endpoint : 'http://ENDPOINT_URL_AND_PORT_HERE/'
		}
	};
	list.push(pumps);
	return list;
};

//Check if input is a json
common.isJson = function(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

module.exports = common;