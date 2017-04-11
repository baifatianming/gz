var React = require('react');

var ActiveUserComponent = React.createClass({
	render() {
		// console.log(11);
		return 	(
				<div>
					<h1>活跃用户统计</h1>
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

module.exports = ActiveUserComponent;