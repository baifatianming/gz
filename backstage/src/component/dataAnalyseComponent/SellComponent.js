var React = require('react');
var $ = require('jquery');
var baseUrl=require('../../../js/baseUrl.js');
var SellComponent = React.createClass({
	getInitialState:function(){
		return {
			arr:['hallo kitty']
		}
	},
	componentDidMount:function(){
		$.ajax({
			url: baseUrl+'/sell',
			type: 'post',
			dataType: 'json',
		})
		.done(function(success) {
			console.log(success);//返回了数据的数组
			// this.setState({
			// 	arr:success
			// })
			// 整理查找到的数据
			var obj={}
			for(var i=0;i<success.length;i++){
				obj.name=success[i].phoneNum;
				obj.count=success[i].money

			}


		}.bind(this))
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

		// {
		// 	username:111,
		// 	count:2222
		// 	shop:[]
		// }
	},
	render:function() {
		// console.log(11);
		return (
				<div className="signIn" >
					<h1>商品销售情况统计</h1>
					<div>消费最多的用户:
						<span>用户名:</span>
						<span>消费总金额:</span>
						<span>光顾过的店:</span>
					</div>
					<br/><hr/>
					
					<div>消费超过1000元的用户{}
						<span>用户名:</span>
					</div>
					<br/><hr/>

					<div>最受欢迎的店铺{}
						<span>收钱次数:</span>
						<span>总收入:</span>
					</div>
				</div>
			)
		
	}
});

module.exports = SellComponent;