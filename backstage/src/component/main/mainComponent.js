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
			console.log("success");
			//有权限登录，正常访问路由
			$("<div>'你好'"+success+"</div>").appendTo('body');
		})
		.fail(function(error) {
			console.log("error");
			//没有权限登录，跳转到登录界面
			window.location.href='http://localhost:99/#/login';
		})
		.always(function() {
			console.log("complete");
		});
		
	},
	render: function(){
		return (
			<div className="dk-container">
				<div className="dk-header"></div>
				<div className="dk-body">
					<div className="dk-menu">
						<ul className="list-group">
							<li className="list-group-item"><Link to="#page0" >1、网站商品信息显示管理</Link></li>
							<li className="list-group-item"><Link to="#page1" >2、商品增删查改管理</Link></li>
							<li className="list-group-item"><Link to="#page2" >3、商品库存信息管理</Link></li>
							<li className="list-group-item"><Link to="#page3" >4、订单管理</Link></li>
							<li className="list-group-item"><Link to="/dataAnalysis" >5、数据统计</Link></li>
							<li className="list-group-item"><Link to="#page5" >6、用户信息管理</Link></li>
							<li className="list-group-item"><Link to="#page6" >7、超级用户管理</Link></li>
						</ul>
					</div>
					<div className="dk-content" data-ui-view=""></div>
				</div>
				<div className="dk-footer">@wwwwwwwwww</div>
			</div>
		)
	}
})

module.exports = MainComponent;