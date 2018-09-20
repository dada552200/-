//获取新闻列表
(function(){
	$.fn.getNewsList=function(cateid){
		var $this=$(this);
		$.ajax({
            type:"GET",
            url:"#",
            data:{
                cateLog:cateid,
                pageIndex:0,
                pageSize:"6"
            },
            dataType:"json",
            success:function(re){
                var list = re.dataList.slice(1,7),
                	innerHtml="";
                if(list.length>0){
                    $.each(list,function(index, value){
                        var item=value;
                        if(item[3]=="6684"){
                            innerHtml+="<li>"+
                                "<a href=gonglue/detail.html?Id="+value[0]+" target='_blank' title="+value[8]+"><i></i>"+
                                    value[8].splitStr(20)
                                +"</a>"+
                                "<span>"+value[14].substring(5,10)+"</span>"+
                            "</li>";
                        }else{
                            innerHtml+="<li>"+
                                "<a href=news/detail.html?Id="+value[0]+" target='_blank' title="+value[8]+"><i></i>"+
                                    value[8].splitStr(20)
                                +"</a>"+
                                "<span>"+value[14].substring(5,10)+"</span>"+
                            "</li>";
                        }
                    });
                }else{
                    innerHtml+="<li class='blank'></li>"
                }
                $this.find("ul").html(innerHtml);
            }
        })
	}
})(jQuery);
//获取攻略列表
(function(){
    $.fn.getGonglueList=function(cateid){
        var $this=$(this);
        $.ajax({
            type:"GET",
            url:"#",
            data:{
                cateLog:cateid,
                pageIndex:0,
                pageSize:"6"
            },
            dataType:"json",
            success:function(re){
                var list = re.dataList.slice(1,6),
                    innerHtml="";
                if(list.length>0){
                    $.each(list,function(index, value){
                        innerHtml+="<li>"+
                            "<a href=gonglue/detail.html?Id="+value[0]+" target='_blank' title="+value[8]+">"+
                                value[8].splitStr(16)
                            +"</a>"+
                            "<span>"+value[14].substring(5,10)+"</span>"+
                        "</li>";
                    });
                }else{
                    innerHtml+="<li class='blank'></li>"
                }
                $this.find("ul").html(innerHtml);
            }
        })
    }
})(jQuery);
var defaultView,
	defaultModel,
	baseURI="",
    playBtn=$(".musics .status span").add($(".music")),
    join1Pop=$("#join1Pop"),
    join2Pop=$("#join2Pop"),
    videoPop=$("#videoPop"),
    telTxt=$("#telTxt"),
    verfyTxt=$("#verfyTxt"),
    neiCePop=$("#neiCePop"),
    Clipboard=new Clipboard('.bird'),
    videoPlayer=null;
//backbone
defaultModel=Backbone.Model.extend({
	defaults:{
		title:"前端配置",
        picList1:[]
	}
});
Model=new defaultModel();
defaultView = Backbone.View.extend({
    el:"#defaultView",
    events:{
       "click .musics .status span,.music":"playMusic",
       "click .order":"joinPopShow",
       "click .pop .close,.pop .new-close":"closePop",
       "click #join1Pop .btn":"signUp",
       "click #join1Pop #verfyImg":"refreshValidate",
       "click .wrap1 .video,.wrap4 .video li":"videoShow",
       "click .wrap3 .item .change":"changeCard",
       "click #neiCePop .tab li":"showItem",
       "click #neiCePop .btn":"changeSlide",
       "click #homefixedbar p":"showNeiCe",
       "click .inner.top .tabs li":"updateShow",
       "click .inner.top .load-wrap .moni":"moniPopShow",
       "click .nav .bird":"showGiftPop"
    },
    templates: {
        "topslideTemp" : _.template($("#topslideTemp").html()),
        "navTemp" : _.template($("#navTemp").html()),
        "roleTemp" : _.template($("#roleTemp").html())
    },
    initialize:function(){
        var _this = this;
        _this.render();
    },
    render: function () {
        var _this = this;
        _this.initPage();
        //右侧新闻轮播
        _this.getNewsList();
        //左侧专题展示轮播
        _this.getSlideList();
        //初始化所有音乐播放器
        _this.initMusicPlayer();
        //获取守护者列表
        _this.getRoleList();
        //获取攻略列表
        _this.getGonglueList();
    },
    initPage:function(){
		//下侧影音轮播
		$(".wrap4 .inner").hoverSlide({
			hoverSelector:".tab>li",
		    itemwrapSelector:".tab-content",
		    classname:"active",
		    width:"1220"
		});
		//底部友情链接
		$(".wrap4 .select").mCustomScrollbar();
        //模拟滚动条
        $("#neiCePop .filter .scroll-wrap").mCustomScrollbar();
        //新增攻略鼠标划入
        $(".wrap2 .bottom").MouseEnter();
        //游戏日历鼠标划入
        $(".wrap2 .inner.top").GameMouseEnter();
    },
    showGiftPop:function(){
        $("#giftPop").find(".content").animateFn("fadeInDown");
        $("#giftPop").show();
    },
    showpicPop:function(e){
        var target=$(e.currentTarget),
            url=target.attr("data-url");
        $("#picPop").find("img").attr("src",url);
        $("#picPop").show();
    },
    videoShow:function(e){
        var bgPlayer=$("#bgPlayer"),
            player1=$("#player1"),
            player2=$("#player2"),
            player3=$("#player3"),
            player4=$("#player4"),
            target=$(e.currentTarget),
            url=target.attr("data-url");
        bgPlayer.jPlayer("stop");
        player1.jPlayer("stop");
        player2.jPlayer("stop");
        player3.jPlayer("stop");
        player4.jPlayer("stop");
        //加载videoJs
        $("#innerVideo source").attr("src",url);
        videoPlayer = videojs('innerVideo');
        videoPlayer.load(url);
        videoPlayer.src(url);
        videoPlayer.ready(function(){
            videoPlayer.play();
        });
        videoPop.animateFn("fadeInDown");
        videoPop.show();
    },
    getNewsList:function(){
    	$(".wrap2 .news .item1").getNewsList("6678,6679,6680,6714,6684");
    	$(".wrap2 .news .item2").getNewsList("6678");
    	$(".wrap2 .news .item3").getNewsList("6680");
    	$(".wrap2 .news .item4").getNewsList("6679");
    	$(".wrap2 .news .item5").getNewsList("6715");
    	$(".wrap2 .news .item6").getNewsList("6684");
        $(".news").hoverSlide();
    },
    refreshValidate: function () {
        var _this = this,
            target = $("#verfyImg"),
            url = "http://moon.sdo.com/web1/Handler/yanzheng/AuthorCode.aspx";
        target.attr("src", url + "?" + new Date().getTime());
    },
    moniPopShow:function(){
        $("#moniPop").find(".content").animateFn("fadeInDown");
        $("#moniPop").show();
    },
    closePop:function(e){
        var target=$(e.currentTarget);
        target.parent().parent().hide();
        if(target.hasClass("v-close")){
            videoPlayer.pause();
        }
    },
    getSlideList:function(){
    	var _this=this;
    	$.ajax({
            url:"#",
            dataType:"json",
            success:function(re){
                if(re.result=="1"){
                    var list=_.filter(re.list,function(item){
                        return item.IsMobile==0;
                    })
                    $(".topslide .swiper-wrapper").html(_this.templates.topslideTemp({"list":list}));
                }
                var swiper = new Swiper('.topslide',{
                    paginationClickable:true,    
                    noSwiping:true,
                    pagination:'.pagination',
                    paginationClickable:true,
                    autoplay:5000,
                    autoplayDisableOnInteraction:false              
                });
            }
        })
    },
    joinPopShow:function(){
        var _this=this;
        _this.refreshValidate();
        join1Pop.show();
        join1Pop.find(".content").animateFn("fadeInDown");
    },
    initMusicPlayer:function(){
        var bgPlayer=$("#bgPlayer"),
            player1=$("#player1"),
            player2=$("#player2"),
            player3=$("#player3"),
            player4=$("#player4");
        //音乐播放器1
        player1.jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3:"http://static.sdg-china.com//moon/pic/20170810_Music/music.mp3"
                });
            },
            play: function() {
                $(this).jPlayer("pauseOthers",0);
                $(".wrap4 .musics .status span").eq(0).addClass("play");
            },
            pause:function(){
                $(".wrap4 .musics .status span").eq(0).removeClass("play");
            },
            swfPath: "",
            supplied: "mp3",
            wmode: "window",
            globalVolume: true,
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true
        });
        // 音乐播放器2
        player2.jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3:"http://static.sdg-china.com/moon/media/2017/website/mp3/1.mp3"
                });
            },
            play: function() {
                $(this).jPlayer("pauseOthers",0);
                $(".wrap4 .musics .status span").eq(1).addClass("play");
            },
            pause:function(){
                $(".wrap4 .musics .status span").eq(1).removeClass("play");
            },
            swfPath: "",
            supplied: "mp3",
            wmode: "window",
            globalVolume: true,
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true
        });
        // 音乐播放器3
        player3.jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3:"http://static.sdg-china.com/moon/media/2017/website/mp3/3.mp3"
                });
            },
            play: function() {
                $(this).jPlayer("pauseOthers",0);
                $(".wrap4 .musics .status span").eq(2).addClass("play");
            },
            pause:function(){
                $(".wrap4 .musics .status span").eq(2).removeClass("play");
            },
            swfPath: "",
            supplied: "mp3",
            wmode: "window",
            globalVolume: true,
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true
        });
        // 音乐播放器4
        player4.jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3:"http://static.sdg-china.com/moon/media/2017/website/mp3/12.mp3"
                });
            },
            play: function() {
                $(this).jPlayer("pauseOthers",0);
                $(".wrap4 .musics .status span").eq(3).addClass("play");
            },
            pause:function(){
                $(".wrap4 .musics .status span").eq(3).removeClass("play");
            },
            swfPath: "",
            supplied: "mp3",
            wmode: "window",
            globalVolume: true,
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true
        });
    },
    playMusic:function(e){
        var target=$(e.currentTarget),
            player=$(""+target.attr("data-id"));
        if(!target.hasClass("play")){
            player.jPlayer("play");
        }else{
            player.jPlayer("pause");
        }
    },
    getRoleList:function(){
        var _this=this,
            picList=[],
            list=[];
        $.ajax({
            type:"GET",
            url:"#",
            dataType:"json",
            success:function(re){
                if(re.result=="1"){
                    list=_.filter(re.list,function(item){
                        return item.IsHome=="1";
                    }).slice(0,8);
                };
                //播放序列列表
                var picList=[];
                $.each(list,function(index, value){
                    picList.push(value.vCartoon0);
                });
                //填充守护者信息
                $(".role-slide").html(_this.templates.roleTemp({"list":list}))
                $(".roleImg").each(function(){
                    var Id=$(this).attr("data-id");
                    $(this).picShow(picList[Id]);
                });
                //填充守护者导航
                $(".nav-wrap2 .nav2").html(_this.templates.navTemp({"list":list}));
                //轮播
                $(".filter").Slide({
                    listSelector:".role-slide"
                });
            }
        })
    },
    changeCard:function(e){
        var target=$(e.currentTarget),
            roleImg=target.parent().parent().find(".roleImg"),
            cardImg=target.parent().parent().find(".cardImg");
        if(target.hasClass("card")){
            target.removeClass("card");
            roleImg.show();
            roleImg.animateFn("fadeIn");
            cardImg.hide();
        }else{
            target.addClass("card");
            cardImg.show();
            cardImg.animateFn("fadeIn");
            roleImg.hide();
        }
    },
    showItem:function(e){
        var target=$(e.currentTarget),
            index=target.index();
        if(!target.hasClass("active")){
            target.addClass("active").siblings().removeClass("active");
            neiCePop.find(".filter ul").css("margin-left",-index*720);
        }
    },
    changeSlide:function(e){
        var target=$(e.currentTarget),
            index=$("#neiCePop .tab li.active").index();
        if(target.hasClass("btnl")){
            if(index>0){
                index--;
            }else{
                index=9;
            }
        }else if(target.hasClass("btnr")){
            if(index<9){
                index++;
            }else{
                index=0;
            }
        }
        $("#neiCePop .tab li").eq(index).trigger("click");
    },
    showNeiCe:function(e){
        var target=$(e.currentTarget);
        neiCePop.find(".content").animateFn("fadeInDown");
        $("#neiCePop .tab li").eq(0).trigger("click");
        neiCePop.show();
    },
    updateShow:function(e){
        var target=$(e.currentTarget),
            index=target.index(),
            filter=$(".inner.top .filter"),
            navContent=$(".inner.top .nav-content");
        if(!target.hasClass("current")){
            target.addClass("current");
            target.siblings().removeClass("current");
            if(index==1){
                filter.removeClass("close");
                navContent.css("margin-left","0px");
            }else if(index==2){
                filter.removeClass("close");
                navContent.css("margin-left","-1400px");
            }else if(index==3){
                filter.removeClass("close");
                navContent.css("margin-left","-2800px");
            }else{
                filter.addClass("close");
                navContent.css("margin-left","0px");
            }
        }
    },
    getGonglueList:function(){
        $(".wrap2 .tablist li .hover-wrap").eq(0).getGonglueList("6684");
        $(".wrap2 .tablist li .hover-wrap").eq(1).getGonglueList("6685");
        $(".wrap2 .tablist li .hover-wrap").eq(2).getGonglueList("6686");
        $(".wrap2 .tablist li .hover-wrap").eq(3).getGonglueList("6717");
    }
});
$(document).ready(function(){
	var bodyE1=$("body");
    	bodyE1.hide();
	var view=new defaultView();
	bodyE1.show();
})