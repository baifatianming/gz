var {ADD,DEL,FIND,MODIFY} = require('../constants/superConstant.js');
var $ = require('jquery');
var baseUrl = require('../../js/baseUrl.js');

module.exports = function(state,action){
	
	var _data; // 定义从客户端页面获取的数据
	function getData(datas){
		$.ajax({
			url:baseUrl+'/super',
			type:"GET",
			dataType:'json',
			async:false,
			data:datas,
			success:function(res){
				_data = res;
				console.log(_data)
			}
		})
		return _data;
	};
	var newData = getData();
	// console.log(_data);

	switch(action.type){
		case ADD:
			console.log('add');
			let button0 = event.target;
			let phone = parseInt($('.phoneN').val());
			let paw = $('.pawN').val();
			if(phone!='' && paw!=''){
				let datas0 = {
					type:'add',
					phone:phone,
					password:paw
				}
				getData(datas0);
				location.reload();
			}		
			break;
		case DEL:
			console.log('del');
			let button =  event.target;
			// console.log($(button).parent().siblings()[0].firstChild.value) //获取indexid的值
			let datas = {
				type:'del',
				num:$(button).parent().siblings()[0].firstChild.value
			}
			getData(datas);
			location.reload();
			break;
		case FIND:
			console.log('find');
			if($('.conditionN').val()!=''){
				let datas1 = {
					type:'find',
					value:$('.conditionN').val(),
					condition:$('.condition').val()
				}
				getData(datas1);
				// location.reload();
			}
			break;
		case MODIFY:
			console.log('modify');
			let button1 =  event.target;
			console.log($(button1).parent().siblings()[1].firstChild.value)
			console.log($(button1).parent().siblings()[2].firstChild.value)
			let datas2 = {
				type:'modify',
				num:$(button1).parent().siblings()[0].firstChild.value,
				phone:$(button1).parent().siblings()[1].firstChild.value,
				password:$(button1).parent().siblings()[2].firstChild.value
			};
			getData(datas2);
			// location.reload();
			break;
		default:
			console.log('default');
			
	}
	return _data;
}
