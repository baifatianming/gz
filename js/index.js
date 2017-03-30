
var app = angular.module("myApp", ['globleapp']);
app.controller("myCtrl", ["$http", "$scope",'url', function($http, $scope,url) {

    var data = [];
    $(window).scroll(function(event) {
        /* Act on the event */
        var douHeight = $(document).height(); //文档高度
        var scrollTop = $(window).scrollTop(); //滚动条高度
        $('.test').html(douHeight+"</br>"+scrollTop);

        if (scrollTop + 800 >= douHeight) {
            //懒加载实现
            $http.get(url+'index').success(function(response) {
                    if (response != false) {
                        data.push(response);
                        // console.log(data);
                        $scope.data = data;
                        $scope.skip=function(id){
                            location.href=url + 'detail.html?shopingId='+id;
                        }
                    } else {
                        console.log(11);
                        return false;
                    }

                })
                // $('<div style=" width:100%;height:300px; background:red;">123123</div>').appendTo( $('.guess') );

        }
    });
    //每次刷新页面都要重新请求加载商品列表
    $http.get(url+'reload').success(function(mesg) {
        console.log(mesg);
    })

}])

//自定义指令引入nav
app.directive('nav',function(){
    return {
        restrict:'A',
        templateUrl:'../html/nav.html',
        link:function(){

            //选择器 .shift .overflow li

            //导航拖拽
            function Slide() {
                var _default = {
                    obj: $('.nav>li'),
                    width: $('.nav').width(),
                    v0x: 0,
                    v0y: 0,
                    x: 0,
                    y: 0,
                    n: 0,
                    limit: 3
                }
                this.opts = _default;
            }
            //滑动效果
            Slide.prototype.slide = function() {
                var v0x = this.opts.v0x;
                var v0y = this.opts.v0y;
                var x = this.opts.x;
                var y = this.opts.y;
                var n = this.opts.n;
                var width = this.opts.width;
                var limit = this.opts.limit;
                this.opts.obj[0].addEventListener('touchstart', function(event) {
                    v0x = event.touches[0].pageX;
                    v0y = event.touches[0].pageY;

                })
                this.opts.obj[0].addEventListener('touchmove', function(event) {
                    x = event.touches[0].pageX;
                    y = event.touches[0].pageY;
                })
                this.opts.obj[0].addEventListener('touchend', function(event) {
                    //左右翻页条件
                    //x增加大于y增加
                    if (Math.abs(x - v0x) > Math.abs(y - v0y)) {
                        if (x > v0x) {
                            console.log("向右翻页");
                            n--;
                            if (n < 0) {
                                n = 0;
                                return false;
                            }
                            // console.log(this)
                            $(this).css("transform", "translateX(" + (-width * n + 'px') + ")");
                            $('#btn li').removeClass('active');
                            $('#btn li').eq(n).addClass('active');
                            x = 0;
                            y = 0;
                            v0x = 0;
                            v0y = 0;
                        }
                        if (x != 0 && x < v0x) {
                            console.log("向左翻页");
                            n++;
                            if (n >= limit) {
                                n = 2;
                                return false;
                            }
                            $(this).css("transform", "translateX(" + (-width * n + 'px') + ")");
                            $('#btn li').removeClass('active');
                            $('#btn li').eq(n).addClass('active');
                            x = 0;
                            y = 0;
                            v0x = 0;
                            v0y = 0;
                        }
                    }
                })

            }

            var slide = new Slide();
            slide.slide();
        }
    }
})

//自定义指令引入shift轮播图
app.directive('shift',function(){
    return {
        restrict:'A',
        templateUrl:'../html/shift.html',
        link:function(){

            // 轮播图
            var self = null;

            function Shift() {
                var _default = {
                    obj: $('.shift .overflow li'),
                    limit: 3,
                    i: 0,
                    way: "top",
                    high: 45,
                    time: 300
                }
                self = _default;
                self.obj.append($('.shift .overflow li>div').first().clone(true));
            }
            Shift.prototype.move = function() {
                self.i++;
                // console.log(self.i);
                if (self.i > self.limit) {
                    self.i = 1;
                    self.obj.css("top", 0);
                }
                self.obj.animate({ top: -parseInt(self.high) * parseInt(self.i) }, self.time);

            }
            var obj = new Shift();
            setInterval(obj.move, 1500);
        
        }
    }
})


function sort(arr,n){
    var i=0;
    while(i<n){


        if(arr[i]>arr[i+1]){
            var k=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=k;

        }
        i++;
    }
    n--;
    if(n<=1){
        return;
    }
        sort(arr,n);

}
sort([2,1,3,5,77,66],6)

