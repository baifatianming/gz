var React = require('react');
var redux = require('react-redux');
var {bindActionCreators} = require('redux');
var SuperComponent = require('../component/superUser/superComponent.js');
var superAction = require('../action/superAction.js');

function mapStateTOProps(state){
	return state;
}

function mapDispatchToProps(dispatch){
	console.log(dispatch);
	return bindActionCreators(superAction,dispatch);
}

module.exports = redux.connect(mapStateTOProps,mapDispatchToProps)(SuperComponent);