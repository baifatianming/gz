var React = require('react');
var $ = require('jquery');
var baseUrl=require('../../../js/baseUrl.js');
var style = require('./SignInAnalysisComponent.css');

var SignInAnalysisComponent = React.createClass({
	getDefaultProps() {
		//组件初始化时定义的默认属性（默认值）
		return {
			stayArr: [],
		};
	},
	getInitialState:function(){
		return {
			arr:['hallo kitty'],
			sum:['666'],
			arrPage:['666'],
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

			var arrPage=[];//页数数组
			for(var i=0;i<Math.ceil(userArr.length/5);i++){
					arrPage.push(1+i)
			}
			this.props.stayArr=userArr;//这个数组的元素不会随着state的状态改变

			// 初始化显示第一页的数据
			var initArr=[];
			for(var i=0;i<5;i++){
				initArr.push(userArr[i]);
			}
			this.setState({
				arr:initArr,
				arrPage:arrPage,
				sum:userArr

			})
		}.bind(this))
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	},
	hander:function(event){
		// console.log(event.target.value);
		// console.log(this.state.arr);
		console.log(this.props.stayArr);
		var pageNum=[];
		var limit=event.target.value*5;
		var startNum=parseInt(event.target.value-1)*5;
		for(var i=startNum;i<limit;i++){
			if(this.props.stayArr[i]){
				pageNum.push(this.props.stayArr[i])
			}
		}
		console.log(pageNum)
		this.setState({
			arr:pageNum
		})

	},
	render:function() {
		console.log(this.state.sum);//当前组件对象
		return (
				<div className="signIn" >
					<h3>注册用户统计</h3>
					<span>总用户:</span>
					<span>{this.state.sum.length}</span>
					<br/>
					<span>第一个注册的用户名：</span>
					<span>{this.state.sum[0].phone}</span>
					<h3>所有用户如下：</h3>
					<table >
							<tr><td>number</td><td>用户名</td><td>密码</td></tr>
						{this.state.arr.map(function(item,index){
							return <tr><td>{index+1}</td><td>{item.phone}</td><td>{item.password}</td></tr>
						})}
					</table>
					<div className="pageNum">
						{
							this.state.arrPage.map(function(item,index){
								return <input type="button" value={item} onClick={this.hander}  />
							}.bind(this))
							
						}
					</div>
				</div>
			)
	}
});

module.exports = SignInAnalysisComponent;