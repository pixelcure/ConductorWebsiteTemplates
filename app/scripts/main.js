////////////////////////////////////////////
// CONDUCTOR PRODUCTIONS MAIN JAVASCRIPT
//////////////////////////////////////////

// Global
import Global from './Global/global.main';

// Nav Functionality
import Nav from './ResponsiveNav/ResponsiveNav.main';

// SVG Length Finder
import SvgLengthFinder from './Utility/svgLengthFinder';

// Showcase Carousel
import ShowCaseCarousel from './showcaseCarousel/showcaseCarousel.main';

// Work Categories
import WorkCategories from './WorkCategories/WorkCategories.main';

// Work Item Info
import WorkItemInfo from './WorkItemInfo/WorkItemInfo.main';

// Google Map
import { OfficeMap } from './OfficeMap/OfficeMap';

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
	// Work Item Info (Only fires if work item info container exists with id of workItemInfo)
	var workItemInfo = new WorkItemInfo();

}); // End Doc Ready
