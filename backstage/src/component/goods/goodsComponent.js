var React = require('react');
var $ = require('jquery');
var style = require('./goodsComponent.css');
var goodsAction = require('../../action/goodsAction.js');
var goodsStore = require('../../stores/goodsStore.js')

var goodsComponent = React.createClass({
  getInitialState: function() {
        return {
          _response:[]
        };
    },
  goodsAdd:function(){
   goodsAction.Mask('show');
  },
  componentDidMount: function() {
        $.get('http://localhost:99/goods', function(_response){
          console.log(1);
            this.setState({
              _response:_response
            })
        }.bind(this));
    }
  ,render:function(){
    console.log(2)
    var array = [];
    for(var key in this.state._response[0]){
      array.push(key)
    }
    return(
      <div>
        <span className = "goods-button clear" onClick = {this.goodsAdd}>增加</span>
        <div  className="goodslist">
          <table>
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

module.exports = goodsComponent;
