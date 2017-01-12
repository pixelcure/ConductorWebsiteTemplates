  //////////////////////////////////////////////
 // Work Categories ///////////////////////////
//////////////////////////////////////////////


// Jquery
import $ from 'jquery';

// Work Item Info
import WorkItemInfo from '../WorkItemInfo/WorkItemInfo.main.js';

// This script controls the sorting of the
// different work categories. 

export default class extends WorkItemInfo {

	constructor() {
		
		super();

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
			this.setEvents();
		}

	};

	setEvents () {

		// Cache This
		let that = this;

		// Items
		let items = document.querySelectorAll(this.catClassTrigger);

		// Add click event
		for(let x = 0; x < items.length; ++x){
			items[x].addEventListener('click', that.sort);
		}

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

		// Items
		let items = this.workGrid.querySelectorAll(this.workGridClassTrigger);

		// Hide All But Category
		for(let x = 0; x < items.length; ++x){
			// If greyed out before, remove that in case it's our category
			items[x].classList.remove('greyed');

			// Not the cateogry? Grey it out, or else clone the element, 
			// remove the element, and then prepend it to the top of the work items
			if(!items[x].classList.contains(catType)){

				// Grey out
				items[x].classList.add('greyed');

			} else if(items[x].classList.contains(catType)){

				// Clone element
				let catEl = items[x].cloneNode(true);

				// Prepend element at top of work grid item list
				// that.workGrid.querySelector('ul.grid-row').prepend(catEl);
				$('#workGrid ul.grid-row').prepend(catEl);

				// Remove previous element, it's now been pushed to the top
				items[x].parentElement.removeChild(items[x]);

			};

		};

		// Store grid row and get offset from top of page
		var gridRow = this.workGrid.querySelector('.grid-row');

        $('html, body').animate({
          scrollTop: $(gridRow).offset().top
        }, 1000);

		// Show work Grid
		that.workGrid.classList.remove('sorting');

		// Set Item Click Handlers since DOM items have been shifted around
		this.setEvents();

	};

};