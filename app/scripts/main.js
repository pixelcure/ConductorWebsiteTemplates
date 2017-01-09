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

// Video Player
import VideoPlayer from './VideoPlayer/VideoPlayer.main';

// Work Item Info
import WorkItemInfo from './WorkItemInfo/WorkItemInfo.main';

// Google Map
import { OfficeMap } from './OfficeMap/OfficeMap';

// Document Ready
document.addEventListener('DOMContentLoaded', function(){

	// Website Nav
	const nav = new Nav(document.getElementsByTagName('nav'), document.querySelectorAll('.menu-trigger'), document.getElementById('menuClose'));

	// Work Categories (Only fires if categories & workgrid exist with id workGrid and id workCategories)
	var workCategories = new WorkCategories();
	
	// Work Item Info (Only fires if work item info container exists with id of workItemInfo)
	var workItemInfo = new WorkItemInfo();
	
	// Video Player
	var videoPlayer = new VideoPlayer();

	// Hero Carousel, To extend, Use else if statement to instantiate a new instance of
	// the carousel with the id of your choice.
	if(document.getElementById('heroCarousel')){
		// Homepage Hero Carousel
		const homeShowcaseCarousel = new ShowCaseCarousel(document.getElementById('heroCarousel'), document.getElementById('videoControls'));
	};	

}); // End Doc Ready
