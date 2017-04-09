var express = require('express');

var path = require('path');

var app = express();

var url = require('url');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false});

// 加载sql模块
// var mysql = require('./mysql');

var mysql = require('./js/connectmysql');

app.use(express.static(path.join(__dirname,'/')));

// 登陆页面
app.post("/login",urlencodedParser,function(req,res){

	mysql.insert({phone:req.body.phone,password:req.body.psw},function(response){
		// console.log(response);
		// console.log(arguments);
		if(response.affectedRows == 1){
			res.send('true');
		}else{
			res.send('error');
		}
	});

});

// 主页
var _default={
    start:0
}

app.get('/reload',function(request, response){
    _default.start=0;//置零
    response.send(true);
})

app.get('/index', function(request, response) {
    // console.log(response)
    console.log(111);

   mysql.get({TableName:'merchant where groups="false"'},function(res){

   		console.log(res);
        if(_default.start<res.length){
            response.send(res[_default.start]);
            _default.start++;
        }
        else{
            response.send(false);
        }
   })

})

// 团购详情页面
app.get('/detail',function(request,response){

	var currentUrl = url.parse(request.url).query;
	console.log(url.parse(request.url));
	console.log(currentUrl);

	mysql.get({TableName:`goods where ${currentUrl}`},function(res){
		response.send(res);
	})
})


// 商品列表页面
app.get('/goodslist',function(request,response){
  // console.log(responce)
	mysql.get({TableName:'merchant where groups="true"'},function(res){
	  	// console.log(res);
	  	response.send(res);
	})
})

// 评论页面
app.post('/comment', urlencodedParser, function(request, response){
	mysql.get({TableName:'comment'},function(res){
		response.send(res);
	})
});


// 商户详情页面
app.post('/firstComment', urlencodedParser, function(request, response){
	mysql.get({TableName:'goods'},function(res){
		response.send(res);
	})
});
app.get('/goodsGroup',function(request,responce){
  mysql.get({TableName:'goodsGroup'},function(res){
    responce.send(res);
  })
})

//购物车
app.post('/shoppingCar',function(request,responce){
  mysql.get({TableName:'goods'},function(res){
    responce.send(res);
  })
})

//订单
app.post('/money',urlencodedParser,function(request,response){
  mysql.insert1({shopingId:request.body.shopingId,name:request.body.name,number:request.body.number,money:request.body.money,phoneNum:request.body.phoneNum},function(response){
    console.log(request.body)
    console.log(typeof parseInt( request.body.shoppingId));

  });

  response.send('123');
})

app.listen(88);


