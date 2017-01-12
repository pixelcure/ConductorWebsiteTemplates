  //////////////////////////////////////////////
 // Work Item Info ///////////////////////////
//////////////////////////////////////////////

// Jquery
import $ from 'jquery';

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

			// Controls
			this.controls = document.getElementById('videoControls');
			
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

	loadVideo (videoUrl) {
		// Load Video into Work Video Player
		$('#standalonePlayer').find('source').attr('src', videoUrl);
		// Show Play Button
		$('.video-container .play-btn').fadeIn();
	}

	// Play Video on Play Button Click
	playVideo (e) {
		
		// Hide Play Button
		e.currentTarget.style.display = 'none';

		// Update Current Video
		this.currentVideo = e.target.parentElement.querySelectorAll('.video')[0];

		// Playing
		this.currentVideo.classList.add('playing');

		// Remove Disabled Controls
		// this.controls.classList.remove('disabled');
		$('#videoControls').removeClass('disabled');

		// Play Video
		this.currentVideo.play();

	};

	// Restart Current Video
	toggleRestart (e) {
		
		// Prevent Default
		e.preventDefault();

		// Video
		let video = $('video.playing')[0] || null;

		// If video is playing, restart it
		if(video){
			video.currentTime = 0;
		}

	};

	// Pause Current Video
	togglePause (e) {

		// Prevent Default
		e.preventDefault();

		let video = $('video.playing')[0];
		
		// If Current Video exists, pause or play it depending on condition
		if(video && video.paused){
		
			// Play
			// this.currentVideo.play();
			video.play();

			// Remove Play Icon
			document.getElementById('pause').classList.remove('icon-play');
			
			// Add Pause Icon
			document.getElementById('pause').classList.add('icon-pause');			
		
		} else if(video && !video.paused) {
		
			// Pause
			// this.currentVideo.pause();
			video.pause();

			// Remove Pause Icon
			document.getElementById('pause').classList.remove('icon-pause');
			
			// Add Play Icon
			document.getElementById('pause').classList.add('icon-play');			
		
		};

	};

	// Volume Current Video
	toggleVolume (e) {

		// Prevent Default
		e.preventDefault();

		let video = $('video.playing')[0];
		
		// If Current Video exists, mute or add volume depending on condition
		if(video && video.muted){
			
			// Play Audio
			// this.currentVideo.muted = false;
			video.muted = false;

			// Remove Muted Icon
			document.getElementById('volume').classList.remove('icon-mute-video');
			
			// Add Sound Icon
			document.getElementById('volume').classList.add('icon-sound');
		
		// } else if(this.currentVideo && !this.currentVideo.muted) {
		} else if(video && !video.muted) {
			
			// Mute
			// this.currentVideo.muted = true;
			video.muted = true;

			// Remove Sound Icon
			document.getElementById('volume').classList.remove('icon-sound');
			
			// Add Muted Icon
			document.getElementById('volume').classList.add('icon-mute-video');			
		
		};

	};

	// Load Work Item
	loadWorkItem (e) {
		e.preventDefault();
	};

};