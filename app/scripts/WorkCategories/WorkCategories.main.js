  //////////////////////////////////////////////
 // Work Categories ///////////////////////////
//////////////////////////////////////////////


// Jquery
import $ from 'jquery';

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

		const that = this;
		
		// Find Active Class
		var removeActiveClass = this.catContainer.querySelector('.active') ? this.catContainer.querySelector('.active') : null;

		// If it exists, remove it
		if(removeActiveClass){
			removeActiveClass.classList.remove('active');
		}

		// Set Active Class
		e.target.classList.add('active');

		// Work Item Category To Show
		let catType = e.target.dataset.categorytype;
		
		//  Hide Work Grid during sort
		this.workGrid.classList.add('sorting');

		// Hide All But Category
		this.workGrid.querySelectorAll(this.workGridClassTrigger).forEach(function(key){
			
			// If greyed out before, remove that in case it's our category
			key.classList.remove('greyed');

			// Not the cateogry? Grey it out, or else clone the element, 
			// remove the element, and then prepend it to the top of the work items
			if(!key.classList.contains(catType)){
				
				// Grey out
				key.classList.add('greyed');
			
			} else if(key.classList.contains(catType)){
			
				// Clone element
				let catEl = key.cloneNode(true);
				
				// Prepend element at top of work grid item list
				that.workGrid.querySelector('ul.grid-row').prepend(catEl);

				// Remove previous element, it's now been pushed to the top
				key.parentElement.removeChild(key);

			};


		});

		// Store grid row and get offset from top of page
		var gridRow = this.workGrid.querySelector('.grid-row');

        $('html, body').animate({
          scrollTop: $(gridRow).offset().top
        }, 1000);

		// Show work Grid
		that.workGrid.classList.remove('sorting');

	};

};