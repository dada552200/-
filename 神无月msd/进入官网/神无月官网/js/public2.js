var vCartoon = [];
(function ($) {
    $.extend({
        validataTel:function(telno){
            var Regx=/^1\d{10}$/;
            return Regx.test(telno);
        },
        validateIE8:function(){
            var DEFAULT_VERSION = "9.0";
            var ua = navigator.userAgent.toLowerCase();
            var isIE = ua.indexOf("msie")>-1;
            var safariVersion="";
            var result=false;
            if(isIE){
                safariVersion =  ua.match(/msie ([\d.]+)/)[1];
            }
            if(safariVersion=="" || safariVersion > DEFAULT_VERSION ){
                result=true;
            }
            return result;
        },
        getQueryString:function(){
            var qs = (location.search.length > 0 ? location.search.slice(1) : ""),
                args = {}, 
                items = (qs.length > 0 ? qs.split("&") : []), 
                item = [], 
                name = "",
                value = "", 
                len = items.length,
                i;
                for (i = 0; i < len; i += 1) {
                    item = items[i].split("=");
                    name = (item[0]);
                    value = (item[1]);

                    if (name.length) {
                        args[name] = value;
                    }
                }
            return args;
        }
    })
    window.$ = jQuery;
})(jQuery);
//字符串处理
String.prototype.splitStr=function(maxwidth){
    var result="";
    if(this.length>maxwidth){
        result=this.substring(0,maxwidth)+"...";
    }else{
        result=this;
    }
    return result;
};
//动态效果
(function($){
  $.fn.animateFn=function(clsname){
    var $this=$(this);
    $this.removeClass(clsname).addClass(clsname + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $this.removeClass(clsname);
    });
  };
})(jQuery);
//导航
(function(){
	var navWrap=$(".nav-wrap"),
		linksItem=$(".nav-wrap .links>li");
	linksItem.hover(function(){
		if($(this).find(".hover").length){
			navWrap.addClass("active")	
		}
	},function(){
		if($(this).find(".hover").length){
			navWrap.removeClass("active");
		}
	})
})(jQuery);
//轮播
(function ($) {
    $.fn.Slide = function (option) {
        var $this = $(this),
            opts = $.extend({}, $.fn.Slide.defaults, option),
            listWrap = $this.find(opts.listSelector),
            listLi=listWrap.find("li"),
            counts=listLi.length,
            index=0,
            timer=null,
            navWrap = $this.find(opts.navSelector),
            navLi=navWrap.find("li"),
            spanHtml="",
            prevBtn=$this.find(opts.prevSelector),
            nextBtn=$this.find(opts.nextSelector);
        //初始化轮播
        // for(var i=0;i<counts;i++){
        //     spanHtml+="<span></span>";
        // }
        // navWrap.html(spanHtml);
        Play(index);
        //自动播放
        function Play(index){
            listLi.removeClass(opts.nowliSelector);
            navLi.removeClass(opts.nowSpanSelector);
            listLi.eq(index).addClass(opts.nowliSelector);
            listLi.eq(index).find(".detail").animateFn("fadeInLeft");
            listLi.eq(index).find(".spider-box").animateFn("fadeInRight");
            navLi.eq(index).addClass(opts.nowSpanSelector);
        }
        //点击切换
        navLi.on("click",function(){
            if(!$(this).hasClass("current")){
                var spanIndex=$(this).index();
                    index=spanIndex;
                    Play(index);
            }
        });
        //左边切换
        prevBtn.on("click",function(){
            var spanIndex=$(".nav2 li.current").index();
            if(spanIndex>0){
                spanIndex--;
            }else{
                spanIndex=counts-1;
            }
            index=spanIndex;
            Play(index);
        });
        //右侧切换
        nextBtn.on("click",function(){
            var spanIndex=$(".nav2 li.current").index();
            if(spanIndex<counts-1){
                spanIndex++;
            }else{
                spanIndex=0;
            }
            index=spanIndex;
            Play(index);
        })
        return $this;
    };
    $.fn.Slide.defaults = {
        listSelector:".slide-wrap",
        navSelector:".nav2",
        nowliSelector:"active",
        nowSpanSelector:"current",
        prevSelector:".prev",
        nextSelector:".next"
    };
})(jQuery);
//悬浮轮播
(function ($) {
    $.fn.hoverSlide = function (option) {
        var $this = $(this),
            opts = $.extend({}, $.fn.hoverSlide.defaults, option),
            hoverItem=$this.find(opts.hoverSelector),
            clsname=opts.clsname,
            width=opts.width,
            itemWrap=$this.find(opts.itemwrapSelector);
        hoverItem.on("mouseenter",function(){
            $(this).addClass(clsname);
            var index=$(this).index();
            $(this).siblings().removeClass(clsname);
            itemWrap.css("left",-index*width);
        })
        return $this;
    };
    $.fn.hoverSlide.defaults = {
        hoverSelector:".type>li",
        itemwrapSelector:".item-wrap",
        clsname:"active",
        width:"470"
    };
})(jQuery);
//序列图播放
(function(){
    $.fn.picShow=function(arrs){
        var $this=$(this),
            imgs=[],
            index=0,
            interImg=$this.find("img"),
            timer=null;
        //初始化
        interImg.attr("src",arrs[0]);
        $this.append(interImg);
        function imgLoad(){
            index++;
            if(index==arrs.length){
                //定时器
                $(".role-border .loadicon").addClass("hide")
                $this.hover(function(){
                    var i=0;
                    clearInterval(timer);
                    timer=setInterval(function(){
                        if(i<arrs.length){
                            i++;
                        }else{
                            i=0;
                        }
                        interImg.attr("src",arrs[i]);
                    },50);
                },function(){
                    clearInterval(timer);
                    interImg.attr("src",arrs[0]);
                })
            }
        }
        for(var i=0;i<arrs.length;i++){
            imgs[i]=new Image();
            imgs[i].src=arrs[i];
            imgs[i].onload=function(){
                imgLoad();
            }
            imgs[i].onerror=function(){
                imgLoad();
            }
        }
    }
})(jQuery);
//序列图
(function(){

    $.fn.picPlay=function(arr , id , ContentID,imgbox){
        console.log(arr)
        var $this=$(this),
            timer=null,
            IsHover = false,
            //ContentID = "CardCartoonPic" + id,
            length=arr.length;

        var i=0 , nowIndex = 0;

        var vec = [];
        for(i=0;i<vCartoon.length;i++)
        {
            if(arr.indexOf(vCartoon[i][0]) != -1)   vec.push(vCartoon[i][1]);
        }

        if(vec.length == 0)
        {
            for(i=0;i<arr.length;i++)
            {
                var imgNode = document.createElement('img');
                imgNode.setAttribute('src', arr[i]);
			    imgNode.setAttribute('id', 'Prople' + id + "_" + i);
			    vec.push(imgNode);                
                vCartoon.push([arr[i] , imgNode , id , i]);
            }
            
        }

        //console.log(vec);
        //console.log($this)
        document.getElementById("img-border").appendChild(vec[0]);
        $(document.getElementById(imgbox)).hover(function(){
            if(IsHover) return;
            IsHover = true;
            nowIndex = 0;
            clearInterval(timer);
            timer=setInterval(function(){
                if(nowIndex<length-1){
                    nowIndex++;
                }else{
                    nowIndex=0;
                }

                var unit = vec[nowIndex];
                document.getElementById(imgbox).appendChild(unit);		//替换舞台上的图片

                if(vCartoon.length > 0) {
			        for(var i=0;i<vCartoon.length;i++)	
			        {
				        try 
				        { 
					        if(document.getElementById('Prople' + vCartoon[i][2] + "_" + vCartoon[i][3]) && vCartoon[i][1] != unit) 	
                            {
                                document.getElementById(imgbox).removeChild(vCartoon[i][1]);
                            }
				        }
				        catch (e) 
				        { 
				        }
			        }
		        }

               
            },1000/30);
        },function(){
            IsHover = false;
            if(vCartoon.length > 0) {
			    for(var i=0;i<vCartoon.length;i++)	
			    {
				    try 
				    { 
					    if(document.getElementById('Prople' + vCartoon[i][2] + "_" + vCartoon[i][3])) 	document.getElementById(imgbox).removeChild(vCartoon[i][1]);
				    } 
				    catch (e) 
				    { 
				    }
			    }
		    }
            document.getElementById(imgbox).appendChild(vec[0]);		//替换舞台上的图片
            clearInterval(timer);
        })
    }
})(jQuery);
//模板页右边栏
(function(){
    $.fn.InitRightBar=function(){
        var $this=$(this),
            main=$this.find(".main"),
            orderbox=$this.find(".order-box"),
            arrow=orderbox.find(".arrow"),
            controlorderbox=$this.find(".control-orderbox");
        //初次进入
        setTimeout(function(){
            orderbox.addClass("show");
        },900);
        //点击展开
        controlorderbox.on("click",function(){
            $(this).removeClass("show");
            orderbox.addClass("show");
            main.removeClass("middle");
        });
        //点击收缩
        arrow.on("click",function(){
            orderbox.removeClass("show");
            main.addClass("middle");
            controlorderbox.addClass("show");
        });
    }
})(jQuery);
//模拟placeholder
(function(){
    $("input, textarea").placeholder();
})(jQuery);
//8月31日大版本更新
(function(){
    $.fn.MouseEnter=function(){
        var $this=$(this),
            $li=$this.find(".tablist>li")
        $li.on("mouseenter",function(){
            $li.removeClass("default");
            $(this).addClass("current");
            $(this).siblings().removeClass("current");
        });
        $li.on("mouseleave",function(){
            $li.removeClass("current");
            $li.addClass("default");
        })
    }
})(jQuery);
(function(){
    $.fn.GameMouseEnter=function(){
        var $this=$(this),
            $li=$this.find("li.li1 li");
        $li.on("mouseenter",function(){
            console.log("dsds");
            $li.removeClass("current");
            $(this).addClass("current");
        });
    }
})(jQuery);