var myapp = angular.module('myApp',['globleapp']);

myapp.controller("myController",['$scope','$http','url',function($scope,$http,url){
  var number=1; //购买数量
  var usersName=123;//默认用户名
  var path = document.location.search;
  var shopingid = parseInt( path.substring(path.indexOf('=')+1) );
  //购买商品所属店铺ID
  $scope.idNum = shopingid;
  var phoneNum = getCookie("phone");
  var moneyStr = $('.firstMoney').html();
  var moneyNum = parseFloat(moneyStr.substring(moneyStr.indexOf('￥')+1)*number);
  $('.lastMoney').html('￥'+moneyNum);
  $(".phoneNum").html(phoneNum);
  console.log(usersName);
  $('#add').click(function(){
    number++;
    moneyNum = parseFloat(moneyStr.substring(moneyStr.indexOf('￥')+1)*number);
    $('.lastMoney').html('￥'+moneyNum);
    $("#number").html(number);
  });
  $("#min").click(function(){
    if(number>1){
      number--;
      moneyNum = parseFloat(moneyStr.substring(moneyStr.indexOf('￥')+1)*number);
      $('.lastMoney').html('￥'+moneyNum);
      $("#number").html(number);
    }
  });
  $("#submitAll").click(function(){
    $.ajax({
      url:url+'money',
      method:'post',
      data:{shopingId:shopingid,"name":usersName,number:number,money:moneyNum,phoneNum:phoneNum},
      dataType:"json"
    }).success(function(response){
      console.log("完成");
    })
  })

}])
