var {add,del} = require('./messageContent.js');
var $ = require('jquery');

module.exports = function(state,action){
  var _response='';
  $.ajax({
    type:"POST",
    url:"/message",
    async:false,
    data:{'indexid':action.name},
    success:function(res){
      _response=res;
    }
  });
  var initState;
  switch(action.type){
    case add:
    initState = {
      _response:_response
    }
    break;
    case del:
    initState = {
      _response:_response
    };
    break;
    default:
    initState={
      _response:_response
    }
    return initState;
  }
}
