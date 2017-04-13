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
      <th>修改</th>
      </tr>
      <tbody className="tbody">
      {this.props._response.map(function(item,index){
        return (<tr>
          <td>{item.indexid}</td>
          <td contentEditable="true">{item.shopingId}</td>
          <td contentEditable="true">{item.name}</td>
          <td contentEditable="true">{item.address}</td>
          <td contentEditable="true">{item.phone}</td>
          <td contentEditable="true">{item.describe}</td>
          <td contentEditable="true">{item.type}</td>
          <td contentEditable="true">{item.star}</td>
          <td contentEditable="true">{item.price}</td>
          <td contentEditable="true">{item.del}</td>
          <td contentEditable="true">{item.src}</td>
          <td>
          <input type="button" value="删除" onClick={this.props.deleteColumn}/>
          </td>
          <td>
            <input type="button" value="修改"/>
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
