var React = require('react');
var ReactRouter = require("react-router");
var DataAnalysisComponentCss = require("./DataAnalysisComponent.css");
var { Router, Route, hashHistory, Link } = ReactRouter;

var DataAnalysisComponent = React.createClass({
	render() {
		// return <div>电影</div>;
		// 路由嵌套
		return (
			<div className="box">
				<h1 className="head">各项数据统计</h1>
				<Link to="/dataAnalysis/signin">注册用户统计</Link>
				<Link to="/dataAnalysis/sell">商品销售情况统计</Link>
				<Link to="/dataAnalysis/active">活跃用户统计</Link>
				<Link to="/dataAnalysis/other">其他</Link>
				<div>{this.props.children}</div>
			</div>
		);
	}
});

module.exports = DataAnalysisComponent;