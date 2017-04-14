var React = require('react');
var $ = require('jquery');
var baseUrl=require('../js/baseUrl.js');
var ReactDOM = require('react-dom');
var redux = require('redux');
var {Provider} = require('react-redux');
var MainComponent = require('./component/main/mainComponent.js');
var LoginComponent = require('./component/login/loginComponent.js');
var DataAnalysisComponent = require('./component/dataAnalyseComponent/DataAnalysisComponent.js');
var SignInAnalysisComponent = require('./component/dataAnalyseComponent/SignInAnalysisComponent.js');
var SellComponent = require('./component/dataAnalyseComponent/SellComponent.js');
var ActiveUserComponent = require('./component/dataAnalyseComponent/ActiveUserComponent.js');
var OtherComponent = require('./component/dataAnalyseComponent/OtherComponent.js');
var GoodsComponent = require('./container/goodsContainer.js');
var SuperComponent = require('./container/superContainer.js');
// var indexReducer = require('./reducers/indexReducers.js')
import indexReducer from './reducers/indexReducers'
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = require('react-router');

var redux = require('redux');
var {Provider} = require('react-redux');

var MessageComponent = require('./container/messageContainer.js');
var store = redux.createStore(indexReducer);
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = require('react-router');

ReactDOM.render(

<Provider store={store}>

	<Router history={hashHistory}>
		<Route path='/' component={MainComponent} >
			<Route path='goods' component={GoodsComponent}/>
			<Route path='message' component={MessageComponent}/>
			<Route path='dataAnalysis' component={DataAnalysisComponent} onEnter={enterFun}>
				<IndexRoute component={SignInAnalysisComponent} onEnter={enterFun} />
				<Route path="sell" component={SellComponent} onEnter={enterFun} />
				<Route path="other" component={OtherComponent} onEnter={enterFun} />
				<Route path="signin" component={SignInAnalysisComponent} onEnter={enterFun} />
			</Route>
			<Route path='/super' component={SuperComponent}/>
		</Route>
		<Route path='/login' component={LoginComponent} onEnter={logOut} />
		<Route path='/edituser/:userid' component={LoginComponent}/>
	</Router>
</Provider>,

	document.getElementById('content')
)

function enterFun(nextState, replace, next){

	//判断是当前用户是否有权限，如果没有，则跳车到 login
	$.ajax({
		url: baseUrl+'/check',
		type: 'post',
		dataType: 'json',
	})
	.done(function(success) {
		if(success==false){
			//没有权限登录，跳转到登录界面
			window.location.href='http://localhost:99/#/login';
			return false;
		}
	})
	.fail(function(error) {
		console.log("error");

	})
	.always(function() {
		console.log("complete");
	});
	next();
	//进入数据统计分析时清除问候语
	// if($('.newdiv')){
	// 	$('.newdiv').remove();
	// }

	//$.post
	//判断当前用户是否已登陆或者是否有权限访问此路由
	// replace('login');
}

//每次进入登录页面路由都注销session
function logOut(){
	$.ajax({
		url: baseUrl+'/logOut',
		type: 'get',
		dataType: 'json',
	})
	.done(function(success) {
		console.log("success");
		console.log(success);
	})
	.fail(function(error) {
		console.log(error);
	})
	.always(function() {
		console.log("complete");
	});

}
