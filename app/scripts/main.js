////////////////////////////////////////////
// CONDUCTOR PRODUCTIONS MAIN JAVASCRIPT
//////////////////////////////////////////

// Global
import Global from './Global/global.main';

// Parallax
import Parallax from './Parallax/Parallax.main';

// Nav Functionality
import Nav from './ResponsiveNav/ResponsiveNav.main';

// SVG Length Finder
import SvgLengthFinder from './Utility/svgLengthFinder';

// Showcase Carousel
import ShowCaseCarousel from './showcaseCarousel/showcaseCarousel.main';

// Work Categories
import WorkCategories from './WorkCategories/WorkCategories.main';

// Google Map
import { OfficeMap } from './Components/OfficeMap/OfficeMap';

// Document Ready
document.addEventListener('DOMContentLoaded', function(){
	
	// Hero Carousel
	if(document.getElementById('heroCarousel')){
		const homeShowcaseCarousel = new ShowCaseCarousel(document.getElementById('heroCarousel'), document.getElementById('videoControls'));
	};

	// Responsive Nav
	const nav = new Nav(document.getElementsByTagName('nav'), document.querySelectorAll('.menu-trigger'), document.getElementById('menuClose'));

	// Work Categories (Only fires if categories & workgrid exist with id workGrid and id workCategories)
	var workCategories = new WorkCategories();

}); // End Doc Ready
