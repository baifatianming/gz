var React = require('react');
var redux = require('redux');
var $ = require('jquery');
var messageReducer = require('../../reducers/messageReducers.js');
var messageAction = require('../../action/messageAction.js');

// var store = redux.createStore(messageReducer);

var MessageComponent = React.createClass({

  render:function(){
    var arr = [];
    for(var key in this.props._response[0]){
      arr.push(key);
    }
    return(

      <div>
      <div className="buttonlist">
      </div>
      <div  className="goodslist">
      <table className="table table-bordered table-striped">
      <tr>
      {arr.map(function(item,index){
        return <th>{arr[index]}</th>
      })}
      <th>删除</th>
      </tr>
      <tbody className="tbody">
      {this.props._response.map(function(item,index){
        return (<tr>
          <td>{item.indexid}</td>
          <td>{item.shopingId}</td>
          <td>{item.name}</td>
          <td>{item.address}</td>
          <td>{item.phone}</td>
          <td>{item.describe}</td>
          <td>{item.type}</td>
          <td>{item.star}</td>
          <td>{item.price}</td>
          <td>{item.del}</td>
          <td>{item.src}</td>
          <td>
          <input type="button" value="删除" onClick={this.props.deleteColumn}/>
          </td>
          </tr>)
      }.bind(this))}
      </tbody>
      </table>
      </div>
      </div>
      )
  }
});

module.exports = MessageComponent;
