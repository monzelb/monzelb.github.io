$( document ).ready(function() {
    console.log( "ready!" );

var projects = [
	{name: "Portfolio",
	picture: "assets/imgs/portfolio.png",
	link: "https://monzelb.github.io/",
	description: "An ongoing adventure and exploration of html, CSS and javascript. Check here for my latest projects."
	},
	{name: "Karma",
	picture:"assets/imgs/karma.png",
	link: "https://github.com/monzelb/startup-landing-page-clone",
	description: "A mockup of a fictional company's website using only html and css.",
	},
	{name: "Karma",
  picture:"assets/imgs/karma.png",
  link: "https://github.com/monzelb/startup-landing-page-clone",
  description: "A mockup of a fictional company's website using only html and css.",
  },
{name: "Karma",
  picture:"assets/imgs/karma.png",
  link: "https://github.com/monzelb/startup-landing-page-clone",
  description: "A mockup of a fictional company's website using only html and css.",
  },
{name: "Karma",
  picture:"assets/imgs/karma.png",
  link: "https://github.com/monzelb/startup-landing-page-clone",
  description: "A mockup of a fictional company's website using only html and css.",
  },

]

// for(var i=0; i<projects.length; i++){
// 	$(".row").append(`<div class='` + `projects col-md-4'` + `><h2>` + projects[i].name + `</h2><h5>` + projects[i].description + `</h5><a class='` + `fram'` + ` href='` + projects[i].link + `'><img class= '` + `thumbs'` + `src='` + projects[i].picture + `'></a></div><br>`);
// }
$('.top-buttons1 ').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$('.mid-buttons1 ').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$(".pink").hover(function(){
    $(this).css("background-color", "mistyrose");
    }, function(){
    $(this).css("background-color", "rgba(255, 255, 255, 0.15)");
});


// $(".mid-buttons ").mouseover(function(){
//     $(this).css("background-color", "rgba(255, 255, 255, .20)");
// });
// $(".mid-buttons ").mouseout(function(){
//     $(this).css("background-color", "rgba(255, 255, 255, .15)");

// });

$(".about").hide();



// $(".options").hover(function(){
// 	$(this).addClass("show-gif");
// }, function(){
// 	$(this).removeClass("show-gif");
// });

// $(".options2").hover(function(){
//   $(this).addClass("show-gif2");
// }, function(){
//   $(this).removeClass("show-gif2");
// });

// $(".options3").hover(function(){
//   $(this).addClass("show-gif3");
// }, function(){
//   $(this).removeClass("show-gif3");
// });

// $(".mid-buttons3").mouseover(function(){
//     $(".about").show();
// });
// $(".mid-buttons3").mouseout(function(){
//     $(".about").hide();
// });


  

});