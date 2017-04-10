var myapp = angular.module('myApp',['globleapp']);


myapp.directive("comment",function(){
  return{
    restrict:'E',
    templateUrl:'./smallComment.html',
    replace:true
  }
});

myapp.controller("myController",['$scope','$http','url',function($scope,$http,url){
  $http({
    url:url+'shoppingCar',
    method:'post'
  }).success(function(response){
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

    setTimeout(function(){
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
      })
    },
    50)
  })
}])
