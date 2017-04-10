var myapp = angular.module('myApp',['globleapp']);

myapp.controller("myController",['$scope','$http','url',function($scope,$http,url){
  var number=1; //购买数量
  var usersName=123;//默认用户名
  var path = document.location.search;//获取网站search部分
  var shopingid = parseInt( path.substring(path.indexOf('=')+1) );//购买商品所属店铺ID
  var phoneNum = getCookie("phone");//用户电话号码
  var moneyStr = $('.firstMoney').html();//获取商品单价并处理为number格式
  var moneyNum = parseFloat(moneyStr.substring(moneyStr.indexOf('￥')+1)*number);//获取商品单价并处理为number格式
  $scope.idNum = shopingid;
  $('.lastMoney').html('￥'+moneyNum);//设置总价
  $(".phoneNum").html(phoneNum);//设置用户电话号码
  $('#add').click(function(){  //商品数量点击+1
    number++;
    moneyNum = parseFloat(moneyStr.substring(moneyStr.indexOf('￥')+1)*number);
    $('.lastMoney').html('￥'+moneyNum);
    $("#number").html(number);
  });
  $("#min").click(function(){//商品数量点击-1
    if(number>1){
      number--;
      moneyNum = parseFloat(moneyStr.substring(moneyStr.indexOf('￥')+1)*number);
      $('.lastMoney').html('￥'+moneyNum);
      $("#number").html(number);
    }
  });
  $("#submitAll").click(function(){//提交订单
    if(phoneNum!=undefined){ //如果用户未登录，则要求用户登录，
      console.log(phoneNum);
    $.ajax({
      url:url+'money',
      method:'post',
      data:{shopingId:shopingid,"name":usersName,number:number,money:moneyNum,phoneNum:phoneNum},
      dataType:"json"
    }).success(function(response){
      alert('提交订单成功');
    })
  }else{
    alert('请登录');
    location.href = "./login.html";
  }
  })

}])
