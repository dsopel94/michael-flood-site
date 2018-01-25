$(function(event) {
	$('.hamburger-icon').click(function(event) {
		$(".menu").slideToggle("slow");
		console.log("clicked")
	});

	$('.nav a').click(function(e) {
		$('.nav a').removeClass('current-page');
		$(this).addClass('current-page');
	})
});

var start = null;

$('.next').click(function() {
	var currentSlide = $('.slide.active');
	var nextSlide = currentSlide.next();

	currentSlide.fadeOut(300).removeClass('active');
	nextSlide.fadeIn(300).addClass('active');

	if(nextSlide.length == 0) {
		$('.slide:nth-child(1)').fadeIn(300).addClass('active')
	}
	pauseSlides();
});

$('.prev').click(function() {
	var currentSlide = $('.slide.active');
	var prevSlide = currentSlide.prev();

	currentSlide.fadeOut(300).removeClass('active');
	prevSlide.fadeIn(300).addClass('active');

	if(prevSlide.length == 0) {
		$('.slide').last().fadeIn(300).addClass('active')
	}
	pauseSlides();
})

function changeSlides() {
	var currentSlide = $('.slide.active');
	var nextSlide = currentSlide.next();
	currentSlide.fadeOut(300).removeClass('active');
	nextSlide.fadeIn(300).addClass('active');

	if(nextSlide.length ==0) {
		$('.slide').first().fadeIn(300).addClass('active')
	}
}

function startSlides() {
	if (!start) {
		start = setInterval(changeSlides, 6000)
	}
}

function pauseSlides() {
	if (start) {
		clearInterval(start);
		start = null;

		setTimeout(startSlides, 3000)
	}
}

$(document).ready(function() {
	startSlides();
	initMap2();
	initMap3();
});
