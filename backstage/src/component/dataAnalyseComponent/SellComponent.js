var React = require('react');
var $ = require('jquery');
var baseUrl=require('../../../js/baseUrl.js');
// var getData=require('../../../js/getData.js');
var SellComponent = React.createClass({
	
	getInitialState:function(){
		return {
			arr:[[{}],[{}],[]],
			activeUser:function(){
				// console.log(1111)
			},
		}
	},
	componentDidMount:function(){
		var url=baseUrl+'/sell';
		$.get(url,function(data) {
			// console.log(success);//返回了数据的数组
			// 整理查找到的数据
			var success=JSON.parse(data);
			var userArr=[],shopArr=[],arr1=[],arr2=[];
			for(var i=0;i<success.length;i++){
				if(i==0){
					userArr.push(success[i].phoneNum);
					shopArr.push(success[i].shopingId);
					arr1.push(success[i].phoneNum);
					arr2.push(success[i].shopingId);
				}
				if(arr1.indexOf( success[i].phoneNum )<0 ){
					userArr.push(success[i].phoneNum);
					arr1.push(success[i].phoneNum);
				}else{
					arr1.push(success[i].phoneNum);
				}
				if( arr2.indexOf( success[i].shopingId )<0  ){
					shopArr.push(success[i].shopingId);
					arr2.push(success[i].shopingId);
				}else{
					arr2.push(success[i].shopingId);
				}
			}
			// console.log(userArr)//得到所有不重复用户名
			// console.log(shopArr)//得到所有不重复的店名

			var allUserMesg=[];
			var vipUser=[];
			for(var k=0;k<userArr.length;k++){
				var obj={};
				obj.username=userArr[k];
				obj.moneyCount=0;
				obj.buyCount=0;
				obj.store=[];
				for(var j=0;j<success.length;j++){
					if(obj.username==success[j].phoneNum){
						obj.moneyCount+=success[j].money;
						obj.buyCount+=success[j].number;
						if(obj.store.indexOf(success[j].shopingId)<0){
							obj.store.push( success[j].shopingId );
						}
					}
				}
				allUserMesg.push(obj);
				//求优质用户*******
				if(obj.moneyCount>=1500){
					vipUser.push(obj.username);
				}

			}
			// console.log(allUserMesg)//得到所有用户的消费总金额，去过的店铺，交易次数

			var allShopMesg=[];
			for(var k=0;k<shopArr.length;k++){
				var obj={};
				obj.shopname=shopArr[k];
				obj.moneyCount=0;
				obj.sellCount=0;
				obj.customer=[];
				for(var j=0;j<success.length;j++){
					if(obj.shopname==success[j].shopingId){
						obj.moneyCount+=success[j].money;
						obj.sellCount+=success[j].number;
						obj.customer.push( success[j].phoneNum );
					}
				}
				allShopMesg.push(obj);

			}
			// console.log(allShopMesg)//得到所有店铺的收入金额，顾客数量，交易次数

			// 设置信息
			var allMsg=[allUserMesg,allShopMesg,vipUser];

			this.setState({
				arr:allMsg
			})
			// console.log(typeof this.state.arr[0]);
			// console.log(typeof this.state.arr[2]);
			this.state.activeUser()

		}.bind(this))

	},
	render:function() {
		// console.log(this.state.arr[0]);
		return (
				<div className="signIn" >
					<h3>用户消费统计</h3>
					 <table >
					 		<tr><td>用户名</td><td>消费总次数</td><td>消费总金额</td><td>光顾过的店的ID</td></tr>
					 	{this.state.arr[0].map(function(item,index){
					 		return <tr><td>{item.username}</td><td>{item.buyCount}</td><td>{item.moneyCount}</td><td>{JSON.stringify(item.store) }</td></tr>
					 	})}
					 </table>
					<h3>店铺销售统计</h3>
					<table >
							<tr><td>店铺ID</td><td>交易总次数</td><td>交易总收入</td><td>光顾过的用户ID</td></tr>
						{this.state.arr[1].map(function(item,index){
							return <tr><td>{item.shopname}</td><td>{item.sellCount}</td><td>{item.moneyCount}</td><td>{JSON.stringify(item.customer) }</td></tr>
						})}
					</table>
					<div>
						<h3>消费超过1500元的用户:</h3>
						{this.state.arr[2].map(function(item,index){
							return <span>{index+1}：{item}，</span>
						})}
					</div>
					<br/>
				</div>
			)
		
	}
});

module.exports = SellComponent;


// <table >
// 		<tr><td>用户名</td><td>消费总金额</td><td>光顾过的店</td></tr>
// 	{this.state.arr[0].map(function(item,index){
// 		return <tr><td>{item.username}</td><td>{item.buyCount}</td><td>{item.store.map(function(item){return <span>item</span>})}</td></tr>
// 	})}
// </table>

// {this.state.arr[2].map(function(item,index){
// 	return <span>用户名:{item}</span>
// })}