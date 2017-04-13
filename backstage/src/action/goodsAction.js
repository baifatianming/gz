var {ADD,DEL} = require('../constants/goodsConstants.js');

exports.add = function(){
  location.reload();
  return {type:ADD};
}
exports.del = function(){
  return {type:DEL};
}
