"use strict"

$(document).ready(function(){
	//main slider
	var $slider = $('.main-slider').slick({
		arrows: false,
		dots: true,
		dots: true,
		infinite: true,
		speed: 700,
		fade: true,
		cssEase: 'linear'
	});

	//change background
	var backs = ['#849d8f', '#8b98a8', '#a18f88'];
	var backs2 = ['#a0b5a9','#a5b1bd','#b5a7a1']
	$slider.on('afterChange', function(event,slick,index) {
  		anime({
  		targets: 'body',
		backgroundColor: backs[index],
		easing: 'linear',
		duration: 1000
  		})
  		anime({
  		targets: '.header__block',
		backgroundColor: backs2[index],
		easing: 'linear',
		duration: 1000
  		})
	});
	
});