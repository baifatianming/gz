
var goodsApp = angular.module('goodsApp',['maskApp','globleapp']);

goodsApp.directive('pull',function(){
  return {
    resctrict:"E",
    templateUrl:"../goodsPull.html",
    replace:true
  }
})
goodsApp.controller('goodsCtroller',['$scope','$http','mask','url',function($scope,$http,mask,url){

  $scope.index = 4;
  var star;
  $http({
    method:"get",
    url:url+"goodslist"
  }).success(function(responce){

    $scope.goodsDate = responce;
    $scope.goods = [];
    for(var i = 0;i < $scope.index ; i++){
      $scope.goods.push($scope.goodsDate[i]);
      star =  $scope.goodsDate[i].start;
    }
    setTimeout(function(){
      $('.star[star="5"]').css("background-position","0 -15px");
      $('.star[star="4.5"]').css("background-position","0 -32px");
    },50)
  });

  var num = $scope.index;
  $(window).scroll(function(event){
    var Height = $(document).height();
    var scrollTop = $(window).scrollTop();
    if(scrollTop + 800 >= Height){
      $http.get(url+'goodslist').success(function(responce){
        if(num == responce.length){
          return;
        }
        $scope.goods.push(responce[num]);
        $scope.goods.push(responce[num+1]);
        num+=2;
        setTimeout(function(){
          $('.star[star="5"]').css("background-position","0 -15px");
          $('.star[star="4.5"]').css("background-position","0 -32px");
          $('.star[star="4"]').css("background-position","0 -49px");
          $('.star[star="3.5"]').css("background-position","0 -65px");
          $('.star[star="3"]').css("background-position","0 -83px");
          $('.star[star="2"]').css("background-position","0 -100px");
        },50)
      })
    }
  });
  $scope.show = function(){
    $('.selector').show();
    $('.list_type').css('background','rgba(0,0,0,0.6)');
    mask.show();
  }
}])


$(function(){

  setTimeout(function(){
    var swiper = new Swiper('.swiper-container', {

      direction: 'vertical',
      slidesPerView: 'auto',
      mousewheelControl: true,
      freeMode: true,
      observer: true,
      observeParents: true
    });

    $('.second-right').on('click','li',function(event){
      $(this).addClass('on').siblings('li').removeClass('on');
    });
    $('.second-left').on('click','li',function(){
      $(this).addClass('in').siblings('li').removeClass('in')
    });
    $('.second-nav').on('click','div',function(){
      $(this).addClass('on').siblings('div').removeClass('on');
    });
    $('#mask').on("click",function(e){
      $('#mask').css('display','none');
      $('.selector').hide();
      $('.list_type').css('background','rgba(0,0,0,0)');
    });
    $('#mask').on("touchmove",function(e){
      $('#mask').css('display','none');
      $('.selector').hide();
      $('.list_type').css('background','rgba(0,0,0,0)');
    });
  },100)


})


