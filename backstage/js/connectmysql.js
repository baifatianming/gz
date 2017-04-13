var mysql = require('mysql');

var TEST_DATABASE = 'management'; //数据库名称
var TEST_DATABASE1 = 'dazhong'; //数据库名称
// var TEST_TABLE = `merchant`; //主页数据库表名

var username = 'root';
var password = '';

module.exports = {

	get:function(data,_calback){
		var client = mysql.createConnection({
			user:username,
			password:password
		});

		client.connect(function(err){
			if(err){
				return;
			}
		});

		client.query('use '+TEST_DATABASE );
		client.query('SELECT * FROM '+ data.TableName,function(err,result,fields){
			if(err){
				_calback(err);
				return;
			}else{
				_calback(result);
				// console.log(result);
			}
		});
		client.end();
	},
	findUser:function(data,_calback){
		var client = mysql.createConnection({
			user:username,
			password:password
		});

		client.connect(function(err){
			if(err){
				return;
			}
		});

		client.query('use '+TEST_DATABASE1 );
		client.query('SELECT * FROM '+ data.TableName,function(err,result,fields){
			if(err){
				_calback(err);
				return;
			}else{
				_calback(result);
				// console.log(result);
			}
		});
		client.end();
	},

	sell:function(data,_calback){
		var client = mysql.createConnection({
			user:username,
			password:password
		});

		client.connect(function(err){
			if(err){
				return;
			}
		});

		client.query('use '+TEST_DATABASE1 );
		client.query('SELECT * FROM '+ data.TableName,function(err,result,fields){
			if(err){
				_calback(err);
				return;
			}else{
				_calback(result);
				// console.log(result);
			}
		});
		client.end();
	},
	insert:function(data,_calback){
		// console.log(data.phone,data.password);
		var client = mysql.createConnection({
			user:username,
			password:password
		});

		client.connect(function(err){
			if(err){
				console.log(err);
				return;
			}
		});

		client.query('use '+TEST_DATABASE );
		client.query(`INSERT INTO login(phone,password) values (${data.phone},${data.password})`,function(err,result,fields){
			if(err){
				_calback(err);
				console.log(err)
				return;
			}else{
				_calback(result);
				console.log(result);
			}
		});
		client.end();
	},

	goodsinsert:function(data,_calback){
		var client = mysql.createConnection({
			user:username,
			password:password
		});
		client.connect(function(err){
			if(err){
				console.log(err);
				return;
			}
		});
		client.query('use '+TEST_DATABASE1 );
		client.query("INSERT INTO `merchant`(shopingId,name,price,src)VALUES('"+data.shopingId+"','"+data.name+"','"+data.price+"','"+data.src+"')",function(err,result,fields){
			if(err){
				_calback(err);
				console.log(err)
				return;
			}else{
				_calback(result);
				console.log(result);
			}
		});
		client.end();
	},

  delete:function(data,_calback){
    var client = mysql.createConnection({
      user:username,
      password:password
    });

    client.connect(function(err){
      if(err){
        console.log(err);
        return;
      }
    });

    client.query('use '+TEST_DATABASE1);
    client.query(`DELETE FROM ${data.TableName} where ${data.conditionName} = ${data.value}`,function(err,result,fields){
      if(err){
        _calback(err);
        console.log(err)
        return;
      }else{
        _calback(result);
        console.log(result);
      }
    });
    client.end();
  }

}
// +"','"+data.describe+"','"+data.price+"','"+data.src+

// data = {
// 	TableName:'',
	// phone:'',
	// password:''
// }
