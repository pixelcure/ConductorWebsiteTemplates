import $ from 'jquery';

export default class {

	constructor(nav, menuTrigger, menuCloseBtn) {

		// Navigation
		this.nav = nav
		
		// Nav Menu Trigger
		this.menuTrigger = menuTrigger;

		// Scroll Height
		this.scrollHeight = null;

		// Nav Items
		this.navItems = document.querySelectorAll('nav ul li');

		// Menu Close Button
		this.menuCloseBtn = menuCloseBtn;

		// Toggle Navigation Method
		this.menuToggle = this.menuToggle.bind(this);		

		// Menu Open Method
		this.menuOpen = this.menuOpen.bind(this);

		// Menu Close Method
		this.menuClose = this.menuClose.bind(this);		

		// Creators Toggle
		this.directorsToggle = this.directorsToggle.bind(this);

		// On Resize Hide or show nav depending on viewport
		$(window).resize(function() {
			if( $(this).width() <= 800 ){
				$(this.nav).show();
			}
		});

		// On click, show or hide the menu (homepage menu trigger, sticky nav menu trigger)
		for(let x = 0; x < this.menuTrigger.length; ++x){
			this.menuTrigger[x].addEventListener('click', this.menuToggle);
		};

		$(this.nav).find('.directors-toggle').on('click', this.directorsToggle);

		// Click Event for Menu Close button
		this.menuCloseBtn.addEventListener('click', this.menuClose);

	} // End Constructor

	// On Menu Open
	menuOpen (e) {

		// remove tranaslate fast 
		$('main').removeClass('transition-fast');
		// add open class, show nav
		$( this.nav ).addClass('open');
		// add body translate 3d effect
		$(document.body).addClass('with-nav-open');	
		// default menu icon
		$( this.menuTrigger ).addClass('open');
		
		// Add Animation To "Float" Items Up
		for(let x = 0; x < this.navItems.length; ++x){
			if(!this.navItems[x].classList.contains('dropdown-item')){
				this.navItems[x].classList.add('comeUp');
			}
		}

	};

	// On Menu Close
	menuClose (e) {

		// Scroll Back to position
		window.scrollTo(0,this.scrollHeight);

		// default menu icon
		$( this.menuTrigger ).removeClass('open');
		// Transition Fast
		$('main').addClass('transition-fast')
		// remove body translate 3d nav open effect
		$(document.body).removeClass('with-nav-open');
		// remove open class, hide nav
		$( this.nav ).removeClass('open');


		// Remove Animation To "Float" Items Up
		for(let x = 0; x < this.navItems.length; ++x){
			this.navItems[x].classList.remove('comeUp');
		}
	};

	// Directors Toggle
	directorsToggle (e) {
		e.preventDefault();
		$('nav .dropdown-nav').slideToggle();
	};

	// Menu Toggle
	menuToggle (e) {
		if( $( this.nav ).hasClass('open') ){
			// Now close menu
			this.menuClose();

		} else {

			// Capture current scroll position
			this.scrollHeight = window.pageYOffset;
			
			// Scroll to top of page
			window.scrollTo(0,0);
			
			// Now Open Menu
			this.menuOpen();

		};
	};
};


			
			

