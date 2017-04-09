var React = require('react');
var $ = require('jquery');
var baseUrl=require('../../../js/baseUrl.js');
var stype = require('./loginComponent.css');


var LoginComponent = React.createClass({
	loginHandler: function(){

		//此处在数据库的管理员数据表中查找是否有匹配的项，有就表示登录成功，同时设置session，反之不成功
		var name=this.refs.name.value;
		var psw=this.refs.psw.value;
		$.ajax({
			url: baseUrl+'/login',
			type: 'post',
			dataType: 'json',
			data:{"name":name,"psw":psw}
		})
		.done(function(success) {
			console.log(success);
			//成功。跳转主页
			window.location.href='http://localhost:99/#/';
		})
		.fail(function() {
			console.log("error");
			alert("失败，请检查你是否有超级管理员权限");
		})
		.always(function() {
			console.log("complete");
		});
		
	},
	render: function(){
		// this.props.params.userid
		return (
			<div className="login">
				<input ref="name" type="text" placeholder="请输入管理员账户" />
				<input ref="psw" type="password" placeholder="请输入管理员密码" />
				<div className="btn">
					<input type="button" value="登陆" onClick={this.loginHandler}/>
					<a href="#">忘记密码</a>
				</div>
			</div>
		)
	}
})

module.exports = LoginComponent;