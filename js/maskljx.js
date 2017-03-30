var maskApp = angular.module('maskApp',[]);

maskApp.service('mask',[function(){
    this.show = function(){
     return (function(){
          $('<div id="mask" style="display:none"><i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i></div>').appendTo('body')
          $('#mask').css({'display':'block','width':'100%','height':'100%','position':'absoulte','z-index':'99','background':'black','opacity':'0.3','position':'fixed','top':0});
          $('.fa-fw').css({'color':'green','position':'fixed','top':'50%','left':'50%','z-index':100,'font-size':'20px'});
      })()
    };
    this.hide = function(){
       return (function(){
          $('#mask').css({'display':'none'});
      })()
    };
}])
