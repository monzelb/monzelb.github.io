$( document ).ready(function() {
    console.log( "ready!" );
/*
    $(".options").hover(function(){
    $(this).css("background-color", "rgba(255, 255, 255, 0.27)");
    }, function(){
    $(this).css("background-color", "rgba(255, 255, 255, 0.15)");

});*/

$(".right").hover(function(){
    $(this).css("background-color", "mistyrose");
    }, function(){
    $(this).css("background-color", "rgba(255, 255, 255, 0.15)");
  
});

$(".mid-buttons").mouseover(function(){
    $(this).css("color", "black");
});

$(".mid-buttons").mouseout(function(){
    $(this).css("color", "white");
});

$(".options").hover(function(){
	$(this).addClass("show-gif");
}, function(){
	$(this).removeClass("show-gif");

	

});
  



    



});