var React = require('react');
var ReactDOM = require('react-dom');
var MainComponent = require('./component/main/mainComponent.js');
var LoginComponent = require('./component/login/loginComponent.js');
var DataAnalysisComponent = require('./component/dataAnalyseComponent/DataAnalysisComponent.js');
var SignInAnalysisComponent = require('./component/dataAnalyseComponent/SignInAnalysisComponent.js');
var SellComponent = require('./component/dataAnalyseComponent/SellComponent.js');
var ActiveUserComponent = require('./component/dataAnalyseComponent/ActiveUserComponent.js');
var OtherComponent = require('./component/dataAnalyseComponent/OtherComponent.js');

var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = require('react-router');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={MainComponent} />
		<Route path='/login' component={LoginComponent}/>
		<Route path='/edituser/:userid' component={LoginComponent}/>
		<Route path='/dataAnalysis' component={DataAnalysisComponent} >
			<IndexRoute component={SignInAnalysisComponent} />
			<Route path="sell" component={SellComponent} />
			<Route path="active" component={ActiveUserComponent} />
			<Route path="other" component={OtherComponent} />
			<Route path="signin" component={SignInAnalysisComponent} />
		</Route>
	</Router>,
	document.getElementById('content')
)

function loginFilter(nextState, replace, next){
	//$.post
	//判断当前用户是否已登陆或者是否有权限访问此路由
	// replace('login');
	// next();
}