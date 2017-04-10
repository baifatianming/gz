var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var goodsStore = assign({},EventEmitter.prototype,{
  show:function(){
    var mask = document.createElement('div');
    var div =  document.createElement('div');
    mask.className = 'mask';
    div.className="center";
    document.getElementsByTagName('body')[0].appendChild(mask);
    div.innerHTML +='<div><span>name:</span><input type="text"/></div>';
    div.innerHTML +='<div><span>shopingId:</span><input type="text"/></div>';
    div.innerHTML +='<div><span>price:</span><input type="text"/></div>';
    div.innerHTML +="<button>增加</button>"
    document.getElementsByTagName('body')[0].appendChild(div);

  },
  hide:function(){

  },
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
