  //////////////////////////////////////////////
 // Work Item Info ///////////////////////////
//////////////////////////////////////////////

// This script controls the load of the #workItemInfo container
// Loads each Item's information, along with the video into the video player.

export default class {

	constructor() {

		this.toggleWorkItem = this.toggleWorkItem.bind(this);
	
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

		let items = document.querySelectorAll(this.infoClassTrigger);
		console.log(items);

		// // Add click event
		// document.querySelectorAll(this.infoClassTrigger).forEach(function(key){
		// 	key.addEventListener('click', that.toggleWorkItem);
		// 	alert('foo');
		// });

		
	};

	toggleWorkItem (e) {
		e.preventDefault();
		alert('foo');

	}


};