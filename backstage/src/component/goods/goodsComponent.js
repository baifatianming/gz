var React = require('react');
var $ = require('jquery');
var style = require('./goodsComponent.css');
var goodsAction = require('../../action/goodsAction.js');
var goodsStore = require('../../stores/goodsStore.js')



var GoodsComponent = React.createClass({
  getInitialState: function() {
        return {
          _response:[]
        };
    },
  componentWillMount: function() {
        $.get('http://localhost:99/goods', function(_response){
            this.setState({
              _response:_response
            })
        }.bind(this));
    },
  goodsAdd:function(){
    goodsAction.add('add')
  },
  getSwordCount:function(){

  }
  ,render:function(){
    var array = [];
    for(var key in this.state._response[0]){
      array.push(key);
      array.splice(8)

    }
    return(
      <div>
        <div className="buttonlist">
          <span className = "goods-button clear" onClick={this.goodsAdd}>增加</span>
          <span className = "goods-button clear" >增加</span>
          <span className = "goods-button clear" >增加</span>
          <span className = "goods-button clear" >增加</span>
        </div>
        <div  className="goodslist">
          <table className="table table-bordered table-striped">
            <thead>
              {array.map(function(item,index){
                return <th>{item}</th>
              })}
            </thead>
            <tbody className="tbody">
              {this.state._response.map(function(item,index){
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
