var myapp = angular.module('myApp',['maskApp','ui.router','globleapp']);

myapp.directive("comment",function(){
  return {
    restrict:'E',
    templateUrl:'./smallComment.html',
    replace:true
  }
});


myapp.controller('myController',['$scope','$http','mask','url',function($scope,$http,mask,url){
  mask.show();
  $http({
    url:url+'firstComment',
    method:'post'
  }).success(function(response){
    var star;
    $scope.response = response;
    var path = document.location.search;
    var id = parseInt( path.substring(path.indexOf('=')+1) );
    $scope.idNum = id;
    var obj = [];
    console.log(id);
    for(var i = 0;i<response.length;i++){
      if( response[i].shopingId == id){
        obj.push(response[i]);
      }
    }
    $scope.responseObj = obj;
    star = obj[0].start;
    switch(star)
    {
      case 0:
      {
        $('#star').css("background-position","0 -134px");break;
      }
      case 1:
      {
        $('#star').css("background-position","0 -117px");break;
      }
      case 2:
      {
        $('#star').css("background-position","0 -100px");break;
      }
      case 3:
      {
        $('#star').css("background-position","0 -83px");break;
      }
      case 3.5:
      {
        $('#star').css("background-position","0 -66px");break;
      }
      case 4:
      {
        $('#star').css("background-position","0 -49px");break;
      }
      case 4.5:
      {
        $('#star').css("background-position","0 -32px");break;
      }
      case 5:
      {
        $('#star').css("background-position","0 -15px");
        break;
      }
    }

    $scope.magnify = magnify;
    function magnify(e){
      console.log(e.target.src);
      $('<div id="maskShow"><i id="close"></i><img id="imgShow" src="'+e.target.src+'"></div>').appendTo('body');
      $("#close").click(function(){
        $('div').remove('div[id="maskShow"]');
      })
    }
    mask.hide();
    setTimeout(function(){
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 3
      });
    },50);

    $(".stairs span").click(function(){
      $(".stairs span").removeClass();
      $(this).addClass("stairsActive");
      console.log($(this));
    })
    $(window).scroll(function(){
      var divHeight = $(".stairs").offset().top;
      var nextDivHeight = $(".privilege").eq(0).offset().top;
      var divInnerHeight = $(".stairs").outerHeight();
      var doHeight = $(document).scrollTop();
      if( doHeight>divHeight ){
        $(".stairs").css({"position":"fixed","top":0,"margin":0,"z-index":1000})
      }else if( divHeight<=(nextDivHeight-divInnerHeight )){
        console.log(1);
        $(".stairs").css({"postion":"none","margin-top":"10px"});
      }
      // console.log($(".stairs").offset());
    })
  })
}])
