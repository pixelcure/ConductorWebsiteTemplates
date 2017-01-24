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
		if(document.querySelectorAll('.video-player').length > 0){

			// Video Player
			this.videoPlayer = document.querySelector('.video-player')[0];

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

	loadVideo (videoUrl, posterUrl) {
	
		// Load Video into Work Video Player
		$('#standalonePlayer').attr('src', videoUrl).attr('poster', posterUrl);
	
		// Show Play Button
		$('.video-container .play-btn').fadeIn();
	
	};

	// Play Video on Play Button Click
	playVideo (e) {

		// Update Current Video
		this.currentVideo = e.target.parentElement.querySelectorAll('.video')[0];

		// Only play video if there is a source
		if(this.currentVideo.getAttribute('src')){
			// Playing
			this.currentVideo.classList.add('playing');

			// Remove Disabled Controls
			// this.controls.classList.remove('disabled');
			$('#videoControls').removeClass('disabled');

			// Hide Play Button
			e.currentTarget.style.display = 'none';

			// Play Video
			this.currentVideo.play();

		};

	};

	// Restart Current Video
	toggleRestart (e) {
		
		// Prevent Default
		e.preventDefault();

		// Video
		let video = document.getElementById('standalonePlayer');

		// If video is playing, restart it
		if(video.classList.contains('playing')){
			// Set time to 0 seconds
			video.currentTime = 0;
			// Play Videp
			video.play();
		};

	};

	// Pause Current Video
	togglePause (e) {

		// Prevent Default
		e.preventDefault();

		let btn = e.currentTarget;

		// Video
		let video = document.getElementById('standalonePlayer');

		console.log(btn.classList.contains('icon-pause'));

		if(btn.classList.contains('icon-pause') && video.classList.contains('playing')){
			btn.classList.remove('icon-pause');
			video.pause();
			btn.classList.add('icon-play');
		}


	
	};

	// Volume Current Video
	toggleVolume (e) {

		// Prevent Default
		e.preventDefault();
		
		let btn = e.currentTarget;
		
		// Video
		let video = document.getElementById('standalonePlayer');

		if(btn.classList.contains('icon-sound') && video.classList.contains('playing')){
			video.muted = false;
		}

	};

};