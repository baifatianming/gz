var myApp = angular.module('myApp',['maskApp','globleapp']);

myApp.controller('myController',['$scope','$http','mask','url',function($scope,$http,mask,url){
  mask.show();
  $http({
    url:url +'comment',
    method:'post'
  }).success(function(response){
    $scope.response = response;
    var id = document.location.search;
    var idNum = parseInt( id.substring(id.indexOf('=')+1) );
    var responseObj = [];
    for(var i=0;i<response.length;i++){
      if(response[i].shopingId == idNum){
        responseObj.push(response[i]);
      }
    }
    console.log(responseObj[0].star);
    $scope.responseObj = responseObj;
    mask.hide();
  })

  setTimeout(function(){
    console.log($('span[star="3.5"]'));
    $('span[star="5"]').css("background-position-y",'-10px');
    $('span[star="4.5"]').css("background-position-y",'-23px');
    $('span[star="4"]').css("background-position-y",'-36px');
    $('span[star="3.5"]').css("background-position-y",'-49px');
    $('span[star="3"]').css("background-position-y","-62px");
    $('span[star="2"]').css("background-position-y",'-75px');
    $('span[star="1"]').css("background-position-y",'-88px');
    $('span[star="0"]').css("background-position-y",'-101px');
  },50);
}])

