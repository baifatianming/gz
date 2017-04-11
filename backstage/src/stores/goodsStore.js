var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var goodsStore = assign({},EventEmitter.prototype,{

  emitChange:function(){
    this.emit('change');
  },
  addChangeListener:function(callback){
    this.on('change',callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

})
module.exports = goodsStore;
