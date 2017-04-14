var React = require('react');
var stype = require('./mainComponent.css');
var $ = require('jquery');
var baseUrl=require('../../../js/baseUrl.js');
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = require('react-router');

var MainComponent = React.createClass({
	componentWillMount: function() {
		//判断是当前用户是否有权限，如果没有，则跳车到 login
		$.ajax({
			url: baseUrl+'/check',
			type: 'post',
			dataType: 'json',
		})
		.done(function(success) {
			console.log(success);
			//有权限登录，正常访问路由
			if($('.newdiv')){
				$('.newdiv').remove();
			}
			if(success==false){
				//没有权限登录，跳转到登录界面
				window.location.href='http://localhost:99/#/login';
				return false;
			}
			$("<div class='newdiv'>你好 "+success.name+"</div><a class='logout' href='http://localhost:99/#/login'>注销</a>").appendTo('body');
		})
		.fail(function(error) {
			console.log("error");

		})
		.always(function() {
			console.log("complete");
		});

	},
	render: function(){
		return (
			<div className="container">
				<div className="header"><h2>后台管理系统</h2></div>
				<div className="body">
					<div className="menu">
						<ul className="list-group">
							<li className="list-group-item"><Link to="/message" >1、网站商品信息显示管理</Link></li>
							<li className="list-group-item"><Link to="/goods" >2、商品增删查改管理</Link></li>
							<li className="list-group-item"><Link to="#page2" >3、商品库存信息管理</Link></li>
							<li className="list-group-item"><Link to="#page3" >4、订单管理</Link></li>
							<li className="list-group-item"><Link to="/dataAnalysis" >5、数据统计</Link></li>
							<li className="list-group-item"><Link to="#page5" >6、用户信息管理</Link></li>
							<li className="list-group-item"><Link to="/super" >7、超级用户管理</Link></li>
						</ul>
					</div>
					<div className="content">{this.props.children}</div>
				</div>
				<div className="footer">@wwwwwwwwww</div>
			</div>
		)
	}
})

module.exports = MainComponent;
