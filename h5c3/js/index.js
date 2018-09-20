


$(function(){

    var k = $(window).height();

    $('#fullpage').fullpage({
    	navigation: true,

        scrollingSpeed:1200,

    	afterLoad:function(anchor,index){
    		if(index == 2){
    			$('.search').show().animate({"right":370},1500,"easeInElastic",function(){
    				$('.word-sofa').animate({"opacity":1},500,function(){
    					$('.search').hide();
    					$('.search-sofa').show().animate({"height":30,"right":246,"bottom":450},1000);
    					 $('.sofas').show().animate({"height":218},1000);
    					 $('.words-02').show().animate({"opacity":1},1000);
    				
    					 
    				});
    			});
    		}
    	},
    	//刚开始滚动屏幕就触发的回调函数  onLeave
    	onLeave:function(index,nextIdex,direction){
    	//index是判断离开页面的序号
    	//nextIdex是判断滚动到页面的序号
    	//direction是判断向上滚动还是向下滚动 只有“up”和“down”两个值
    	if(index == 2 && nextIdex == 3){
    		$(".shirt-02").show().animate({"bottom": -(k - 250),"width":207,"left":260},2000,function(){
                $(".size-02").animate({"opacity":1},500,function(){
                    $(".shopcar-02").animate({"opacity": 1},500);
                })
            });
            $(".cover").show();
    	}
        //第三屏到第四屏过度
        if(index == 3 && nextIdex ==4){
            $(".shirt-02").hide();
            $(".t1f").show().animate({"bottom":-((k - 250 ) + 50),"left": 260},2000,function(){
                $(this).hide();
                $(".car-img").show();

                $(".car").animate({"left":"150%"},3000,"easeInElastic",function(){
                    $(".note").show();
                    $(".note-img, .words-04-a").animate({"opacity": 1}, 1000);
                });
            })
        }
        
        //第四屏幕到第五屏幕过度
        if(index == 4 && nextIdex == 5) {
                    // 小手上来
                    $(".hand-05").animate({"bottom": -100}, 2000, function() {
                        // 鼠标显示
                        $(".mouse-05-a").animate({"opacity": 1});
                        // 沙发从 800 到  70
                        $(".t1f-05").show().animate({"bottom": 70}, 1000, function() {
                            // 单子上走 走完之后， 我们的文字翻转
                            $(".order-05").animate({"bottom": 390}, function(){
                                $(".words-05").addClass("words-05-a");
                            });
                        })
                    });
            }

                       if(index == 5 && nextIdex == 6 ) {
                // 沙发的距离 当前屏幕的高度 减去  box 的 bottom  500
                    $(".t1f-05").animate({"bottom": -(k - 500), "left": "40%", "width": 65}, 1500, function() {
                        $(".t1f-05").hide();
                    });

                    $(".box-06").animate({"left": "38%"}, 1500, function() {
                         $(this).animate({"bottom": 40}, 500, function() {
                            $(this).hide();

                            // 行走的过程就是 背景移动的过程
                            // 背景jqury 里面改变比较麻烦  backgroundPositionX  x坐标 
                            // 
                            $(".section6").animate({"backgroundPositionX": "100%"}, 4000, function() {
                                // 当背景动画执行完毕  boy 大小复原  
                                $(".boy").animate({"height": 305, "bottom": 116}, 1000, function() {
                                    $(this).animate({ "right": 500}, 500, function() {
                                        // 门显示出来 模拟打开门的效果
                                        $(".door").animate({"opacity": 1},200, function() {
                                            // 之后girl 显示出来
                                            $(".girl").show().animate({"right": 350, "height": 306 },500, function() {
                                                  $(".pop-07").show();
                                                   $(".next").fadeIn();
                                            })
                                        });
                                    });
                                });
                            });
                            // 光的速度
                            $(".words-06-a").show().animate({"left": "30%"},2000, "easeOutElastic");
                            // 
                            $(".pop-06").show();
                         });
                    });
                   
            }
            //第七屏
             if(index == 6 && nextIdex == 7 ) {
                setTimeout(function() {
                    $(".star").animate({"width": 120}, 500, function() {
                        $(".good-07").show();
                         $(".next").fadeIn();
                    });

                }, 2000);
            }

            $(".beginShping").hover(function(){
                $(".btn-08-a").toggle();
            });

            $(document).mousemove(function(evnet){
                var x = evnet.pageX - $(".hand-08").width()/2;
                var y = evnet.pageY + 10;

                var minY = k - 449;
                if(y < minY){
                    y = minY;
                }
                $(".hand-08").css({"left": x, "top": y});
            });

            $(".again").click(function(event){
                $.fn.fullpage.moveTo(1);

                $("img, .move").attr("style","");
            });


    	},

    });  
});