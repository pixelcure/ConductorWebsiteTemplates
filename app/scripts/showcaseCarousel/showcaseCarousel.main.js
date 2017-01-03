  //////////////////////////////////////////////
 // Video/Image Carousel ///////////////////////////
//////////////////////////////////////////////

// This will build an instance of a Slick Carousel
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

		this.init = function () {
			// Instantiate Slider Instance
			$(this.container).slick({
				dots : true,
				appendDots : $(this.dotsContainer),
				autoplay : false,
				autoplaySpeed : 5000,
				cssEase : 'ease-in',
				easing : 'ease-in'
			});
		}

		this.init();

	};

};