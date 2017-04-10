var goodsDispatcher = require('../dispatcher/goodsDispatcher.js');

var goodsAction = {
  Mask:function(type){
    goodsDispatcher.dispatch(type);
  }
}
module.exports = goodsAction;
