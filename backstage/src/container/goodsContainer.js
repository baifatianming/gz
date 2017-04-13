var React = require('react');
var redux = require('react-redux');

var {bindActionCreators} = require('redux');
var GoodsComponent = require('../component/goods/goodsComponent.js');

var GoodsAction = require('../action/goodsAction.js');

function mapStateToProps(state){

  return state;
}

function mapDispatchToProps(dispatch){

  return bindActionCreators(GoodsAction,dispatch)
}
module.exports = redux.connect(mapStateToProps,mapDispatchToProps)(GoodsComponent);
