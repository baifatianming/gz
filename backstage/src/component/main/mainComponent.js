var React = require('react');
var stype = require('./mainComponent.css');

var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = require('react-router');

var MainComponent = React.createClass({
	componentWillMount: function() {
		//判断是当前用户是否有权限，如果没有，则跳车到 login
	},
	render: function(){
		return (
			<div className="dk-container">
				<div className="dk-header"></div>
				<div className="dk-body">
					<div className="dk-menu">
						<ul className="list-group">
							<li className="list-group-item"><Link to="#page0" title="">1、网站商品信息显示管理</Link></li>
							<li className="list-group-item"><Link to="#page1" title="">2、商品增删查改管理</Link></li>
							<li className="list-group-item"><Link to="#page2" title="">3、商品库存信息管理</Link></li>
							<li className="list-group-item"><Link to="#page3" title="">4、订单管理</Link></li>
							<li className="list-group-item"><Link to="#page4" title="">5、数据统计</Link></li>
							<li className="list-group-item"><Link to="#page5" title="">6、用户信息管理</Link></li>
							<li className="list-group-item"><Link to="#page6" title="">7、超级用户管理</Link></li>
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