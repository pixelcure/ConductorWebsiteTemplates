  //////////////////////////////////////////////
 // Work Item Info ///////////////////////////
//////////////////////////////////////////////

// This script controls the load of the #workItemInfo container
// Loads each Item's information, along with the video into the video player.

export default class {

	constructor() {
	
		// Current Video Player
		this.currentVideo = null;

		// Does a video player exist?
		if(document.querySelectorAll('.video-player')){

			// Work Item Class for click event
			this.playBtn = document.querySelectorAll('.video-player .play-btn');
			
			// Bind This to control handlers - toggleRestart
			this.toggleRestart = this.toggleRestart.bind(this);
			
			// Bind This to control handlers - togglePause
			this.togglePause = this.togglePause.bind(this);
			
			// Bind This to control handlers - toggleVolume
			this.toggleVolume = this.toggleVolume.bind(this);			

			// Init Video Player if these items exist
			this.init();

		};

	};

	init () {

		// Cache This
		let that = this;

		// Set events on all play button(s) (there could be more if multiple players in showcase carousel)
		this.playButtonClickHandler(this.playBtn);

		// Set events for Video Controls
		// Expecting classes, #restart, #pause, #volume
		this.controlsHandler();
		
	};

	// Set Play Button Click Event Handlers
	playButtonClickHandler(array){
		
		// For All Play Buttons (It's possible for more than 1)
		for(let x = 0; x < array.length; ++x){
			// Add click event to playVideo method
			array[x].addEventListener('click', this.playVideo);
		};

	};

	// Controls Click Event Handlers
	controlsHandler () {

		// Restart
		document.getElementById('restart').addEventListener('click', this.toggleRestart);
		
		// Pause / Play
		document.getElementById('pause').addEventListener('click', this.togglePause);
		
		// Volume
		document.getElementById('volume').addEventListener('click', this.toggleVolume);
	
	};

	// Play Video on Play Button Click
	playVideo (e) {
		
		// Hide Play Button
		e.currentTarget.style.display = 'none';

		// Update Current Video
		this.currentVideo = e.target.parentElement.querySelectorAll('.video')[0];

		// Play Video
		this.currentVideo.play();

	};

	// Restart Current Video
	toggleRestart (e) {
		
		// Prevent Default
		e.preventDefault();

		console.warn(this.currentVideo);

		// If Current Video, otherwise these are null
		if(this.currentVideo){
			this.currentVideo.currenttime = 0;
		};

	};

	// Pause Current Video
	togglePause (e) {

		// Prevent Default
		e.preventDefault();
		
		// If Current Video exists, pause or play it depending on condition
		if(this.currentVideo && this.currentVideo.paused){
		
			// Play
			this.currentVideo.play();
		
		} else if(this.currentVideo && !this.currentVideo.paused) {
		
			// Pause
			this.currentVideo.pause();
		
		};

	};

	// Volume Current Video
	toggleVolume (e) {

		// Prevent Default
		e.preventDefault();
		
		// If Current Video exists, mute or add volume depending on condition
		if(this.currentVideo && this.currentVideo.muted){
			
			// Play Audio
			this.currentVideo.muted = false;
		
		} else if(this.currentVideo && !this.currentVideo.muted) {
			
			// Mute
			this.currentVideo.muted = true;
		
		};

	};

};