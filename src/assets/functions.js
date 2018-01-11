$(function(){
    $("body").on("click", "#nav-icon", ()=>{
        $("#nav-icon").toggleClass("open");
        $("nav ul:last-of-type").toggleClass("show", 50, "linear");
      
    });

    $(window).on("scroll", ()=>{
        if($(window).scrollTop() > 1){
           $("nav").css({
               "box-shadow": "0px 2px 20px #666"
           });
        }else{
            $("nav").css({
                "box-shadow": ""
            });
        }


        simpleParallax();
    });




});

function simpleParallax(){
    let $windowScroll = $(window).scrollTop();

    $("header").css({
        "background-position":"center " + ($windowScroll * 0.5 )+ "px"  
    });

}