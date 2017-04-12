var React = require('react');
var $ = require('jquery');
var baseUrl=require('../../../js/baseUrl.js');
var style = require('./SignInAnalysisComponent.css');

var SignInAnalysisComponent = React.createClass({
	getInitialState:function(){
		return {
			arr:['hallo kitty'],
			jjk:"number11"
		}
	},
	componentDidMount:function(){
		$.ajax({
			url: baseUrl+'/findUser',
			type: 'post',
			dataType: 'json',
		})
		.done(function(success) {
			// console.log(typeof success);//返回了数据的数组 object

			var userArr=[];
			var userArrphoneNum=[];
			userArr.push( success[0] );
			userArrphoneNum.push( success[0].phone );
			for(var i=1;i<success.length;i++){
				if(userArrphoneNum.indexOf( success[i].phone )<0){
					userArr.push( success[i] );
					userArrphoneNum.push( success[i].phone );
				}
			}
			// console.log(userArr);//得到不重复的用户名
			this.setState({
				arr:userArr,
				jjk:"hallo jack"
			})
		}.bind(this))
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	},
	render:function() {
		console.log(this.state.jjk);//当前组件对象
		return (
				<div className="signIn" >
					<h3>注册用户统计</h3>
					<span>总用户:</span>
					<span>{this.state.arr.length}</span>
					<br/>
					<span>第一个注册的用户名：</span>
					<span>{this.state.arr[0].phone}</span>
					<h3>所有用户如下：</h3>
					<table >
							<tr><td>用户名</td><td>密码</td></tr>
						{this.state.arr.map(function(item,index){
							return <tr><td>{item.phone}</td><td>{item.password}</td></tr>
						})}
					</table>
				</div>
			)
	}
});

module.exports = SignInAnalysisComponent;