var myApp = angular.module('myApp',['commonApp','globleapp']);

myApp.controller('myController',['$scope','$http','url',function($scope,$http,url){
	$scope.login = function(){
		var user = {
			phone:$scope.phone,
			psw:$scope.password
		}
		console.log(user);

		$http({
			url:url + "login",
			method:'post',
			data:user
		}).success(function(res){
			if(res == 'true'){
				console.log(res);
				location.href = "./index.html";
			}else{
				console.log(res);
			}
		})
	}
}])