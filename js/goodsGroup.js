var groupApp = angular.module('groupApp',['globleapp']);

groupApp.controller('groupContrl',['$scope','$http','url',function($scope,$http,url){
  $http({
    method:'get',
    url:url+'goodsGroup'
  }).success(function(response){
    $scope.group = response;

  })
}])
