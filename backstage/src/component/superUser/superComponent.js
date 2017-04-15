var React = require('react');
var style = require('./superComponent.css');
var $ = require('jquery');
var baseUrl = require('../../../js/baseUrl.js');

var {Router,Route,hashHistory,Link,IndexRoute,browserHistory} = require('react-router');

var SuperComponent = React.createClass({
	getInitialState:function(){
		return	{
			_data:[]
		};
	},
	componentWillMount() {
		
		// $.get(baseUrl +'/super',function(responce){
		// 	console.log(11);
		// 	this.setState({_data:responce})
		// }.bind(this));
	},
	componentDidMount() {
	},
	render:function(){
		var array = [];
		for(var key in this.props.superReducer[0]){
			array.push(key)
		}
		// console.log(this.props.superReducer)
		return (
			<div className="superPage">
				<div>
					<input className='phoneN form-control' type="text" placeholder="phone"/>
					<input className="pawN form-control" type="text" placeholder="password"/>
					<button className="btn btn-default" onClick={this.props.add}>增加数据</button>
					<br/>
					<select className="condition form-control">
						<option value="indexid">indexid</option>
						<option value="phone">phone</option>
						<option value="password">password</option>
					</select>
					<input className="conditionN form-control" type="text"/>
					<button className="btn btn-default" onClick={this.props.find}>查找数据</button>
				</div>

				<div>	
					<table className="table table-hover">
						<thead>
							<tr>
								{
									
									array.map(function(item,index){
										return <th>{item}</th>
									})
								}
							</tr>
						</thead>
						<tbody className="tbody">
							{
								this.props.superReducer.map(function(item,index){
									return <tr key={item.indexid}>
										<td><input value={item.indexid}/></td>	
										<td><input defaultValue={item.phone}/></td>
										<td><input defaultValue={item.password}/></td>
										<td><button className="btn btn-default" onClick={this.props.del}>删除</button></td>
										<td><button className="btn btn-default" onClick={this.props.modify}>修改数据</button></td>
									</tr>
								}.bind(this))
							}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
})

module.exports = SuperComponent;
