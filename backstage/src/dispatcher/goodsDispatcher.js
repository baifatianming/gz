var goodsStore = require('../stores/goodsStore.js');

var Dispatcher = require('flux').Dispatcher;
var goodsStore = require('../stores/goodsStore.js');

var goodsDispatcher = new Dispatcher();

goodsDispatcher.register(function(type){
  if(type=='show'){
    goodsStore.show();
    goodsStore.emitChange();
  }if(type=='hide'){
    goodsStore.hide();
    goodsStore.emitChange();
  }

})

module.exports = goodsDispatcher;
