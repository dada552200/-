$(function(){
	setTimeout(function(){
		$(".section1").addClass('comein');
	},200);
    $('#fullpage').fullpage({
    	navigation:true,

    	loopBottom: true,
    	//循环滚动

    	onLeave:function(index, nextIndex, direction){
    		$(".section1").removeClass('comein');

    		if(nextIndex == 1) {
    			$(".section1").addClass('comein');
    		}

    		if (nextIndex != 1) {
    			$("#bg").addClass('rotate');
    		} else {
    			$("#bg").removeClass('rotate');
    		}


    		if(nextIndex == 2) {
    			// 我们的jquery  里面的animate 是不支持 transform 等 
    			// jquery 里面通过 css 和  transition 搭配也能基本实现 类似animate 效果
    			$(".p2").css("transform", "translateX(-50%) translateY(-50%) translateZ(0px) scale(1)");  
    		} else {
    			$(".p2").css("transform", "translateX(-50%) translateY(-50%) translateZ(2000px) scale(1)");  
    		}
    		// 第3屏幕的制作 
    		//  当我们进入第3屏幕的时候，  盒子进入 屏幕
    		if(nextIndex == 3) {
    			$(".p3").css("transform", "translateZ(-50px) rotateX(30deg)")
    			$(".title3").css("transform", "translateZ(0px) rotateX(0deg)")
    		} 
			// 第4屏幕的制作
			if(nextIndex == 4) {
    			$(".p3").css("transform", "translateZ(-200px) rotateX(-45deg) translateX(3000px)")
    			$(".title3").css("transform", "translateZ(1200px) rotateY(-60deg)")
    		} 
    	}
    });
});