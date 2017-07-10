/**
 * 
 */
$(document).ready(function(){
	var opacity = 1;
    var lastScrollTop = 0;
    $(window).scroll(function(){
    var st = $(this).scrollTop();
    if(st == 0)
        $('.navbar').css('opacity','1');
    if (opacity > 0.5 && (st > lastScrollTop) && opacity!=0){
       $('.navbar').css('opacity','-=0.06');
       opacity -= 0.01;
    }
    else if(opacity < 1 && opacity>0)
    {
       $('.navbar').css('opacity','+=0.06');
        opacity += 0.01;
    }
    lastScrollTop = st;
    });    
    $(".navbar-margin").hover(function(){
        $(this).css("border-bottom", "3px solid rgb(12, 234, 204)");
        }, function(){
        $(this).css("border-bottom","");
    });
    $(".navbar-margin").hover(function(){
        $(this).css("border-bottom", "3px solid rgb(12, 234, 204)");
        }, function(){
        $(this).css("border-bottom","");
    });
    $(".navbar").hover(function(){
        $(this).css("opacity", "1");
        }, function(){
        $(this).css("opacity",opacity+"");
    });
});
    