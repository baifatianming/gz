var {ADD,DEL,FIND,MODIFY} = require('../constants/superConstant.js');

exports.add = function(){
	return {type:ADD};
}

exports.del = function(){
	return {type:DEL};
}

exports.find = function(){
	return {type:FIND};
}

exports.modify = function(){
	return {type:MODIFY};
}