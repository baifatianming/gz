var React = require('react');
var $ = require('jquery');
var style = require('./goodsComponent.css');
var goodsAction = require('../../action/goodsAction.js');
var goodsReducer = require('../../reducers/goodsReducer.js');

var GoodsComponent = React.createClass({
render:function(){
    var array = [];
    for(var key in this.props.goodsReducer.goodsdata[0]){
      array.push(key);
      array.splice(8)

    }
    return(
      <div>
        <div className="buttonlist clear">
          <span className = "goods-button clear" onClick={this.props.add}>增加</span>
          <div><span>shoppingId</span><input type="text" id="shoppingId"/></div>
          <div><span>name</span><input type="text" id="name"/></div>
          <div><span>price</span><input type="text" id="price"/></div>
          <div><span>src</span><input type="text" id="src"/></div>

        </div>
        <div  className="goodslist">
          <table className="table table-bordered table-striped">
            <thead>
              {array.map(function(item,index){
                return <th>{item}</th>
              })}
            </thead>
            <tbody className="tbody">
              {this.props.goodsReducer.goodsdata.map(function(item,index){
                return <tr>
                  <td>{item.indexid}</td>
                  <td>{item.shopingId}</td>
                  <td>{item.name}</td>
                  <td>{item.describe}</td>
                  <td>{item.start}</td>
                  <td>{item.price}</td>
                  <td>{item.del}</td>
                  <td>{item.src}</td>
                </tr>
              })}
              </tbody>
          </table>
        </div>
      </div>
      )
  }
});



module.exports = GoodsComponent;
