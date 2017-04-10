var myapp = angular.module('myApp',[]);

myapp.controller('myController',['$scope','$http',function($scope,$http){

  var path = document.location.search;
  console.log(path);
  $scope.path = path;
  $('#downloadLeft').click(function(){
    alert('敬请期待!!');
  })
  $('#downloadRight').click(function(){
    alert('暂未上线~');
  })
}])
