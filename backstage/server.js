var express = require('express');

var path = require('path');

var app = express();

var url = require('url');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//如果要使用cookie，需要显式包含这个模块
var cookieParser = require('cookie-parser');
//如果要使用session，需要单独包含这个模块
var session = require('express-session');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

var server = new WebpackDevServer(webpack(config), {
  stats: config.devServer.stats,
  hot: true,
  publicPath: config.output.publicPath
});

server.listen(3000, 'localhost', function(err, result) {});

// 加载sql模块
// var mysql = require('./mysql');
var mysql = require('./js/connectmysql');

app.use(express.static(path.join(__dirname,'/')));

app.use(cookieParser());
app.use(session({
    secret: '12345', //用来对session数据进行加密的字符串.这个属性值为必须指定的属性
    name: 'goodcar', //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: { maxAge: 8000000 }, //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}))




//设置跨域访问
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });



// 柯11111111111111111111111111111111111111111111111111111111111
// 登陆页面
app.post("/login", urlencodedParser, function(request, response) {

    //先检查数据库是否有匹配用户
    //如果有，设置session
    mysql.get({ TableName: 'supermanager' }, function(res) {
      console.log(res);
            if(res[0].username == request.body.name){
            	// 此时成功匹配，设置session
            	request.session.name = request.body.name;
            	console.log(request.session.name);
            	response.send('true');
            }

        })

});


app.post('/check', function(request, response) {
    // console.log(response)
    console.log(request.session.name);
    if(request.session.name){
        response.send(JSON.stringify({"name":request.session.name}));
    }else{
        response.send(false);
    }

})
//注销功能
app.get('/logOut', function(request, response) {
    console.log("logOut")
    request.session.name=null;
    response.send("logOut");

})

app.post('/findUser', function(request, response) {
    console.log("findUser");
    mysql.findUser({ TableName: 'login' }, function(res) {
                response.send(JSON.stringify(res));


        })

});
app.get('/goods',function(request,responce){
    mysql.findUser({TableName:'merchant'},function(res){
        responce.send(res);
    })
})

app.post('/message',urlencodedParser,function(request,response){
    mysql.delete({TableName:'goods',conditionName:'indexid',value:request.body.indexid},function(){
        console.log('finish');
    })
    mysql.findUser({TableName:'goods'},function(res){
        response.send(res);
    })
})

app.get('/sell', function(request, response) {
    console.log("sell");
    mysql.sell({ TableName: 'shopingcar' }, function(res) {
                response.send(JSON.stringify(res));
        })

})



//肖1111111111111111111111111111111111111111111111111111
app.get('/goods',function(request,responce){
    mysql.findUser({TableName:'merchant'},function(res){
        responce.send(res);
    })
})

app.listen(99);
