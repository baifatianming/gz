var {ADD, DEL} = require('../constants/goodsConstants.js');
var $ = require('jquery')
module.exports = function(state,action){

  var goodsState;
  function Ajax(){
    $.ajax({
      type:'get',
      url:'/goods',
      async:false,
      success:function(responce){
        goodsState = {
          goodsdata:responce
        }
      }
    })
  }
  var State = new Ajax();

  switch(action.type) {
    case ADD:
      var data = {
        shopingId:$('#shoppingId').val(),
        name:$('#name').val(),
        price:$('#price').val(),
        describe:$('#describe').val(),
        src:$('#src').val()
      };
      $.ajax({
        type:'POST',
        url: '/goods',
        async:false,
        data:data,
        success:function(msg){
          console.log(msg)
        }
      })
      break;
  }
  return goodsState;
}

