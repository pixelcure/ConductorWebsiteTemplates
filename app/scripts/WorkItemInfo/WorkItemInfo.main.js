  //////////////////////////////////////////////
 // Work Item Info ///////////////////////////
//////////////////////////////////////////////



// JQuery
import $ from 'jquery';

// Video Player
import VideoPlayer from '../VideoPlayer/VideoPlayer.main.js';

// This script controls the load of the #workItemInfo container
// Loads each Item's information, along with the video into the video player.

export default class extends VideoPlayer {

	constructor() {
		
		// Extending Video Player
		super();

		// Toggle Work Item Method
		this.toggleWorkItem = this.toggleWorkItem.bind(this);

		// Work item info being used?
		this.itemInfoEnabled = false;

		// Work Item Close
		this.workItemClose = this.workItemClose.bind(this);		
	
		// If Work Grid & WorkItemInfo
		if(document.getElementById('workGrid') && document.getElementById('workItemInfo')){

			// Work Item Info Container
			this.infoContainer = document.getElementById('workItemInfo');

			// Work Item Class for click event
			this.infoClassTrigger = this.infoContainer.dataset.itemclass;

			// Init
			this.setStage();

			// We are using an item info container
			this.itemInfoEnabled = true;

		} else if (document.getElementById('workGrid')){
			
			// Work Item Class for click event
			this.infoClassTrigger = 'item'

			// Init
			this.setStage();		

		};

	};

	setStage () {

		// Cache This
		let that = this;

		// Work Items
		let items = document.querySelectorAll('.' + this.infoClassTrigger);

		// Work Item View Triggers to load content into work item info container
		let infoTriggers = document.querySelectorAll('.' + this.infoClassTrigger);

		// Hash Tag, subtracts '#'
		let hash = window.location.hash ? window.location.hash.substr(1) : null;

		// Sets click event on Item triggers "view project" button.
		for(let x = 0; x < infoTriggers.length; ++x){
			// Set click
			infoTriggers[x].addEventListener('click', that.toggleWorkItem);
		};

		// Check to see if we are loading in a video right off the bat
		if(hash){
			
			// Force click on item, toggles the work item
			for(let x = 0; x < items.length; ++x){
				items[x].dataset.videoid === hash ? items[x].click() : '';
			};

		};

	};

	workItemClose (e) {
		
		// Hide It, Slide up Animation, Will close it's parent container (workItemInfo)
		$(e.target.parentElement).slideUp(250);

	};

	toggleWorkItem (e) {
		
		// Prevent Default
		e.preventDefault();

		// Poster Url - Poster that will be loaded in standalone player
		let posterUrl = e.currentTarget.dataset.posterurl;
		
		// Video Id
		let videoId = e.currentTarget.dataset.videoid;

		// Video Url - Video Url that will be loaded in standalone player src
		let videoUrl = e.currentTarget.dataset.videourl;

		// Set Hashtag
		window.location.hash = videoId;

		// Load Video;
		this.loadVideo(videoUrl, posterUrl);

		// If item info exists, load the content
		if(this.itemInfoEnabled){

			// Item Info,
			// Drills from button > .inner > .caption > anchor > item container,
			// this then finds ".item-info" el, clones it, and injects it into the item info container, id #workItemInfo
			let itemInfo = e.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector('.item-info').cloneNode(true);
			
			// Hide Work Item Info Container
			this.infoContainer.style.display = 'none';

			// Remove Children
			$(this.infoContainer.children).remove();

			// Append itemInfo
			// this.infoContainer.append(itemInfo);
			$('#workItemInfo').append(itemInfo);

			// Scroll offset
			let offset = $(this.infoContainer).offset().top;

			// Animate to Item Info
	        $('html, body').animate({
	          scrollTop: offset - 450
	        }, 1000);

			// Show Work Item Info
			$(this.infoContainer).show();

			// Slide Down
			// $(this.infoContainer).slideDown();

			// Close Button Click Event Setup
			let closeButton = this.infoContainer.querySelector('.work-item-close');

			// On close Button Click
			closeButton.addEventListener('click', this.workItemClose);
			
		} else {

			// Scroll offset
			let offset = $(this.videoPlayer).offset().top;

			// Animate to Item Info
	        $('html, body').animate({
	          scrollTop: offset
	        }, 1000);		

		}

	};


};