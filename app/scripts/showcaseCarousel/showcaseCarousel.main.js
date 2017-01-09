  //////////////////////////////////////////////
 // Video/Image Carousel ///////////////////////////
//////////////////////////////////////////////

// This will build an instance of a Slick Carousel
// This is used on the homepage to show case work.

// Jquery
import $ from 'jquery';
// Slick Carousel
import Slick from 'slick-carousel/slick/slick.min';
// Video Player
import VideoPlayer from '../VideoPlayer/VideoPlayer.main';

export default class extends VideoPlayer {

	constructor(showcaseCarouselContainer, dotsContainer, transitionBoolean, transitionSpeed) {
		
		// Call Super
		super();

		// Container to build slider in
		this.container = showcaseCarouselContainer;
		
		// Dots Container to Append To
		this.dotsContainer = dotsContainer;

		// Init
		this.init();

	};

	// Build Slick Carousel
	init () {

		// Cache This
		let that = this;

		// Instantiate Slider Instance
		$(this.container).slick({
			dots : true,
			appendDots : $(this.dotsContainer),
			autoplay : false,
			autoplaySpeed : 5000,
			cssEase : 'ease-in',
			easing : 'ease-in'
		});

		// // Set Size of Carousel Based on Current Item
		// var a = document.getElementById('heroCarousel');
		// var b = document.querySelector('.slick-current');
		
		// // Set Hero Container Height
		// a.style.height = b.getBoundingClientRect().height;

		// // On Resize
		// $(window).resize(function(){
		// 	// Set Hero Container Height
		// 	var a = document.getElementById('heroCarousel');
		// 	var b = document.querySelector('.slick-current');
		// 	a.style.height = b.getBoundingClientRect().height;
		// });

		// On Slice Change, Fire before, Handle video
		$(this.container).on('beforeChange', function(){
			
			// If current slide contains a video container
			if($('.slick-current').find('.video-container').length > 0){
				
				// that.currentVideo.pause();

				// Pause Video
				let video = $('video.playing')[0];

				// Pause Video
				video.pause();
				
				$('video').prev('.play-btn').css('display' ,'block');

				// Remove Playing Class
				$(video).removeClass('playing')

				// Remove it as current video
				// that.currentVideo = null;

			};
		
		});

	};

};