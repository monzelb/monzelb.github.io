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
	{name: "Jquery streetfighter",
	picture: "assets/imgs/street-fighter.png",
	link: "https://github.com/monzelb/jquery-streetfighter",
	description:"One of my first endeavors using Jquery to make an interactive webpage."
	}
]

for(var i=0; i<projects.length; i++){
	$(".row").append(`<div class='` + `projects col-md-4'` + `><h2>` + projects[i].name + `</h2><h5>` + projects[i].description + `</h5><a class='` + `frame'` + ` href='` + projects[i].link + `'><img class= '` + `thumbs'` + `src='` + projects[i].picture + `'></a></div>`);
}


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