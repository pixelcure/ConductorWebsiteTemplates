  ////////////////////////////////////////////////
 // Global Javascript ///////////////////////////
////////////////////////////////////////////////

// General javascript file, most of these methods
// will invoke themselves when needed.


// Global Object
let global = {} || global;



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
