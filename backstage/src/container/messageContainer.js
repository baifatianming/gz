var React = require('react');
var redux = require('react-redux');
var {bindActionCreators} = require('redux');
var MessageComponent = require('../component/message/messageComponent.js');
var MessageAction = require('../action/messageAction.js');


function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(MessageAction,dispatch)
}

module.exports = redux.connect(mapStateToProps,mapDispatchToProps)(MessageComponent);
