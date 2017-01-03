  //////////////////////////////////////////////
 // Work Categories ///////////////////////////
//////////////////////////////////////////////

// This script controls the sorting of the
// different work categories. 

export default class {

	constructor() {
		
		// Bind "this" to Sort
		this.sort = this.sort.bind(this);

		if(document.getElementById('workGrid') && document.getElementById('workCategories')){

			// Categories Container
			this.catContainer = document.getElementById('workCategories');

			// Category Class for click event
			this.catClassTrigger = this.catContainer.dataset.categoryclass;
		
			// Work Grid
			this.workGrid = document.getElementById('workGrid');

			this.workGridClassTrigger = this.workGrid.dataset.itemclass;
		
			// Init
			this.init();
		}

	};

	init () {

		// Cache This
		let that = this;

		// Add click event
		document.querySelectorAll(this.catClassTrigger).forEach(function(key){
			key.addEventListener('click', that.sort);
		});

		
	};

	sort(e) {

		// Work Item Category To Show
		let catType = e.target.dataset.categorytype;

		// Hide All But Category
		this.workGrid.querySelectorAll(this.workGridClassTrigger).forEach(function(key){
			// Not the cateogry? Hide it, or else, show it
			if(!key.classList.contains(catType)){
				key.style.display = 'none';
			} else if(key.classList.contains(catType)){
				key.style.display = 'block';
			};
		});

	};

};