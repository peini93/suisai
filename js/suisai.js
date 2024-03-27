
var isMobile = 0;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	isMobile = 1;
}else{
	isMobile = 0;
}

$(function(){
		$('body').jpreLoader({
			splashID: "#jSplash",
			loaderVPos: '50%',
			splashVPos: '50%',
			autoClose: true
		}, function() { 
		});

		$(window).scroll(function(){
			var sx = $(window).scrollTop();
			var ah1 = $('#a01').offset().top-200;
			var ah2 = $('#a02').offset().top-200;
			var ah3 = $('#a03').offset().top-200;
			var ah4 = $('#a04').offset().top-200;
			var ah5 = $('#a05').offset().top-200;
			if(sx>=ah1 && sx<ah2){
									ACTION(1);     
   }else if(sx>=ah2 && sx<ah3){
         					ACTION(2);            	 
   }else if(sx>=ah3 && sx<ah4){
        					ACTION(3);  	              	        
	 }else if(sx>=ah4 && sx<ah5){
									ACTION(4);     
   }else if(sx>=ah5){
									ACTION(5);	 
   }
		});

		GOTOP();
		ACTION();

		$(".hb a").click(function() {
	    	$(".hb a").toggleClass("change");
	    	$( ".m_m" ).stop(true,false).animate({width:"toggle"},300); 
  		});


});

function GOTOP(){
	$('.gotop,.logo').on("click", function(){
	  	$('html,body').animate({scrollTop:0},800);
	});
	$(window).scroll(function(){
       var Y = $(window).scrollTop();
       if(Y>800){
        $(".gotop").stop(true,false).animate({ bottom:3+"%",opacity:1},800); 
        }else{
        $(".gotop").stop(true,false).animate({ bottom:0,opacity:0},800); 
        }
    });
}

function ACTION(num){
	switch(num){
		case 1:
			$("#b01").stop().delay(500).animate({opacity: 1, paddingTop:0},500);
		break;
		case 2:
			$("#b02").stop().delay(500).animate({opacity: 1, paddingTop:0},500);
		break;
		case 3:
			$("#b03").stop().delay(500).animate({opacity: 1, paddingTop:0},500);
		break;
		case 4:
			$("#b04").stop().delay(500).animate({opacity: 1, paddingTop:0},500);
		break;
		case 5:
			$("#b05").stop().delay(500).animate({opacity: 1, paddingTop:0},500);
		break;
	}

}
