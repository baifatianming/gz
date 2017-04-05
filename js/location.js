$(function(){
	//top
	$('header').on('touchstart', '.mid a', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('header .mid a').css('background','none').css('color','#666');
		$(this).css('background','#ff6633').css('color','white');
	});

	// 热门城市
	!function(){
		var arr=['北京','成都','重庆','广州','杭州','南京','上海','深圳','苏州','天津','武汉','西安'];
		var str='';
		var k=0;
		for(var i=0;i<4;i++){
			str+='<tr>';
			for(var j=0;j<3;j++){
				str+='<td><a href="">'+arr[k]+'</a></td>'
				k++;
			}
			str+='</tr>';
		}
		$('.k_hot table').append(str);
		// console.log(str);
	}()

	// 更多城市
	!function(){
		var str='';
		var k=65;
		for(var i=0;i<5;i++){
			str+='<tr>';
			for(var j=0;j<5;j++){
				if(String.fromCharCode(k)=='U'||String.fromCharCode(k)=='V'){
					k++;
				}else{
					str+='<td><a href="">'+String.fromCharCode(k)+'</a></td>';
					k++;
				}
				
			}
			str+='</tr>';
		}
		$('.k_more table').append(str);
		// console.log(str);
	}()

	//AAAAAAAAAAAAAAAAAAAAAAAAAA
	!function(){
		var arr=['北京','成都','重庆','广州','杭州','南京','上海','深圳','苏州','天津','武汉','西安'];
		var str='';
		var k=0;
		for(var i=0;i<4;i++){
			str+='<tr>';
			for(var j=0;j<3;j++){
				str+='<td><a href="">'+arr[k]+'</a></td>'
				k++;
			}
			str+='</tr>';
		}
		$('.k_A table').append(str);
		// console.log($('.k_A table').offset());//可求出次节点到页面顶部距离
	}()


})