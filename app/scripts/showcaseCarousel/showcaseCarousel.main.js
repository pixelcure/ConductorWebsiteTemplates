  //////////////////////////////////////////////
 // Video/Image Carousel ///////////////////////////
//////////////////////////////////////////////



// This will build an instance of a Slick Carousel (requires jquery as dependency)
// This is used on the homepage to show case work.

// Jquery
import $ from 'jquery';
// Slick Carousel
import Slick from 'slick-carousel/slick/slick.min';

export default class {

	constructor(showcaseCarouselContainer, dotsContainer, transitionBoolean, transitionSpeed) {

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
			autoplay : true,
			autoplaySpeed : 4000,
			cssEase : 'ease-in',
			easing : 'ease-in'
		});

	};

};