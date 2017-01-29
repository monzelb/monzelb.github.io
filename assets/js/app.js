$( document ).ready(function() {
    console.log( "ready!" );
/*
    $(".options").hover(function(){
    $(this).css("background-color", "rgba(255, 255, 255, 0.27)");
    }, function(){
    $(this).css("background-color", "rgba(255, 255, 255, 0.15)");

});*/

$(".right").hover(function(){
    $(this).css("background-color", "pink");
    }, function(){
    $(this).css("background-color", "rgba(255, 255, 255, 0.15)");
});


$(".options").hover(function(){
	$(this).addClass("show-gif");
}, function(){
	$(this).removeClass("show-gif");

	

});
  



    



});