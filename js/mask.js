var maskApp = angular.module('maskApp',[]);

maskApp.service('mask',[function(){
    this.show = function(){
     return (function(){
          document.getElementById('mask').style.display ='block';
      })()
    };
}])
