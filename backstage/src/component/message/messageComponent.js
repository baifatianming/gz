var React = require('react');
var redux = require('redux');
var $ = require('jquery');
var messageReducer = require('../../reducers/messageReducers.js');
var messageAction = require('../../action/messageAction.js');

// var store = redux.createStore(messageReducer);

var MessageComponent = React.createClass({
  getInitialState:function(){
    return {
      _response:[]
    };
  },
  componentDidMount:function(){
    $.get('/message',function(response){
      console.log('finish');
      this.setState({
        _response:response
      })
    }.bind(this));
  },
  render:function(){
    console.log(this.state._response[0]);
    var arr = [];
    for(var key in this.state._response[0]){
      arr.push(key);
    }
    console.log(arr);
    return(

      <div>
        <input type="button" value="添加新信息"/>
        <input type="button" value=""/>
        <div  className="goodslist">
          <table>
            <tr>
              {arr.map(function(item,index){
                return <th>{arr[index]}</th>
              })}
              <th>删除</th>
            </tr>
            <tbody className="tbody">
              {this.state._response.map(function(item,index){
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
                    <input type="button" value="删除"/>
                  </td>
                </tr>)
              })}
              </tbody>
          </table>
        </div>
      </div>
      )
  }
});

module.exports = MessageComponent;
