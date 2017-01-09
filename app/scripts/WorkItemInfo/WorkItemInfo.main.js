  //////////////////////////////////////////////
 // Work Item Info ///////////////////////////
//////////////////////////////////////////////

// JQuery
import $ from 'jquery';

import VideoPlayer from '../VideoPlayer/VideoPlayer.main.js';

// This script controls the load of the #workItemInfo container
// Loads each Item's information, along with the video into the video player.

export default class extends VideoPlayer {

	constructor() {
		
		// Extending Video Player
		super();

		// Toggle Work Item Method
		this.toggleWorkItem = this.toggleWorkItem.bind(this);

		// Work Item Close
		this.workItemClose = this.workItemClose.bind(this);		
	
		// If Work Grid & WorkItemInfo
		if(document.getElementById('workGrid') && document.getElementById('workItemInfo')){

			// Work Item Info Container
			this.infoContainer = document.getElementById('workItemInfo');

			// Work Item Class for click event
			this.infoClassTrigger = this.infoContainer.dataset.itemclass;

			// Init
			this.init();

		};

	};

	init () {

		// Cache This
		let that = this;

		// Work Items
		let items = document.querySelectorAll('.' + this.infoClassTrigger);

		// Work Item View Triggers to load content into work item info container
		let infoTriggers = document.querySelectorAll('.' + this.infoClassTrigger);
		
		// Sets click event on Item triggers "view project" button.
		for(let x = 0; x < infoTriggers.length; ++x){
			// Set click
			infoTriggers[x].addEventListener('click', that.toggleWorkItem);
		};

	};

	workItemClose (e) {
		
		// Hide It, Slide up Animation, Will close it's parent container (workItemInfo)
		$(e.target.parentElement).slideUp(250);

	};

	toggleWorkItem (e) {
		
		// Prevent Default
		e.preventDefault();

		// Item Info,
		// Drills from button > .inner > .caption > anchor > item container,
		// this then finds ".item-info" el, clones it, and injects it into the item info container, id #workItemInfo
		let itemInfo = e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.item-info').cloneNode(true);
		
		// Hide Work Item Info Container
		this.infoContainer.style.display = 'none';

		// Remove Children
		$(this.infoContainer.children).remove();

		// Append itemInfo
		this.infoContainer.append(itemInfo);
		
		// Slide Down
		$(this.infoContainer).slideDown();

		// Scroll offset
		let offset = $(this.infoContainer).offset().top;

		// Animate to Item Info
        $('html, body').animate({
          scrollTop: offset - 300
        }, 1000);

		// Close Button Click Event Setup
		let closeButton = this.infoContainer.querySelector('.work-item-close');

		// On close Button Click
		closeButton.addEventListener('click', this.workItemClose);

	};


};