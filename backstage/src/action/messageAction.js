var {ADD,DEL} = require("../reducers/messageContent.js");
var $ = require('jquery');

exports.deleteColumn = function(event){
  var td = $(event.target).closest('tr').children()[0];
  var name = $(td).html();
  location.reload();
  return {type:DEL,name:name};
}

exports.addColumn = function(){
  return {type:ADD};
}
