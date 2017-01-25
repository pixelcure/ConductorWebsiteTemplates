  ////////////////////////////////////////////////
 // Global Javascript ///////////////////////////
////////////////////////////////////////////////



// General javascript file, most of these methods
// will invoke themselves when needed.


// Jquery
import $ from 'jquery';

// Global Object
let global = {} || global;


// Sticky Header, On All PAges
global.stickyHeader = (function () {
			
			// Scroll Top
	    window.addEventListener('scroll', function(e){
	    	
	    	// Scroll Offset
	    	let scrollTop = window.scrollY;

	    	// Header
	    	let header = document.getElementById('stickyHeader');
		    
		    // Header Scroll
		    if(scrollTop <= 120){
		    	header.classList.remove('top');
		    } else if (scrollTop => 120) {
		    	header.classList.add('top');
		    };

	    });

}());

// Keep Video Callout at video height (avoids a overhang)
global.homepageCarousel = (function(){


}());

// Scroll Down Scroll Animation, Homepage only
global.scrollDown = (function() {

	let scrollDown = document.getElementById('scrollDown') || null;

	// if #scrollDown exists
	if(scrollDown != null){
	
		scrollDown.addEventListener('click', function (e) {
			
			// Prevent Default
			e.preventDefault();

			// Scroll to work
			$('html, body').animate({
				scrollTop : $('.work-grid').offset().top
			}, 1000);

		});
	
	};

}());