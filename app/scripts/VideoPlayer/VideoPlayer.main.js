  //////////////////////////////////////////////
 // Work Item Info ///////////////////////////
//////////////////////////////////////////////



// This script controls the load of the #workItemInfo container
// Loads each Item's information, along with the video into the video player.

export default class {

	constructor() {
	
		// Current Video Player
		this.currentVideo = null;

		// Video Playing?
		this.videoPlaying = false;

		// Volume on?
		this.volume = true;

		// Does a video player exist?
		if(document.querySelectorAll('.video-player').length > 0){

			// Video Player
			this.videoPlayer = document.querySelector('#standalonePlayer');

			// Work Item Class for click event
			this.playBtn = document.querySelector('.video-player .play-btn');

			// Pause Button
			this.pauseBtn = document.querySelector('#pause');

			// Volume Button
			this.volumeBtn = document.querySelector('#volume');

			// Controls
			this.controls = document.getElementById('videoControls');
			
			// Bind This to control handlers - toggleRestart
			this.toggleRestart = this.toggleRestart.bind(this);			

			// Bind This to control handlers - playVideo
			this.playVideo = this.playVideo.bind(this);
			
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
		this.playBtn.addEventListener('click', this.playVideo);

		// Set events for Video Controls
		// Expecting classes, #restart, #pause, #volume
		this.controlsHandler();
		
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
	
		// Is the video paused? If it is, let's fix the control icon
		if(!this.videoPlaying && this.pauseBtn.classList.contains('icon-play')){
	
			// Remove Play Control Button, Make it a Pause
			this.pauseBtn.classList.remove('icon-play');
	
			// Add Pause Class
			this.pauseBtn.classList.add('icon-pause');
	
			// Video now playing
			this.videoPlaying = false;
	
		};

		// Add Disabled Controls
		this.controls.classList.add('disabled');

		// Video no longer playing (if it was)
		this.videoPlayer.classList.remove('playing');

		// Load Video
		this.videoPlayer.src = videoUrl

		// Load Poster
		this.videoPlayer.poster = posterUrl;
	
		// Show Play Button
		this.playBtn.style.display = 'block';
	

	};

	// Play Video on Play Button Click
	playVideo (e) {

		// Only play video if there is a source
		if(this.videoPlayer.getAttribute('src')){
			
			// Playing
			this.videoPlayer.classList.add('playing');

			// Remove Disabled Controls
			this.controls.classList.remove('disabled');

			// Hide Play Button
			e.currentTarget.style.display = 'none';

			// Play Video
			this.videoPlayer.play();

			// Video Playing
			this.videoPlaying = true;			

		};

	};

	// Restart Current Video
	toggleRestart (e) {
		
		// Prevent Default
		e.preventDefault();

		// If video is playing, restart it
		if(this.videoPlayer.classList.contains('playing')){
			
			// Set time to 0 seconds
			this.videoPlayer.currentTime = 0;

			// Is the video paused? If it is, let's fix the control icon
			if(!this.videoPlaying && this.pauseBtn.classList.contains('icon-play')){
		
				// Remove Play Control Button, Make it a Pause
				this.pauseBtn.classList.remove('icon-play');
		
				// Add Pause Class
				this.pauseBtn.classList.add('icon-pause');
		
				// Video now playing
				this.videoPlaying = true;
		
			};

			// Play Videp
			this.videoPlayer.play();

		}; // End if playing

	};

	// Pause Current Video
	togglePause (e) {

		// Prevent Default
		e.preventDefault();

		if(this.videoPlaying && this.videoPlayer.classList.contains('playing')){
			
			// Pause Video
			this.videoPlayer.pause();
			
			// Remove pause icon
			this.pauseBtn.classList.remove('icon-pause');
			
			// Make a play icon on pause button
			this.pauseBtn.classList.add('icon-play')
			
			// Video Playing now false
			this.videoPlaying = false;
		
		} else if(this.videoPlayer.classList.contains('playing')) {
			
			// Video play
			this.videoPlayer.play();
			
			// Remove icon play, make pause button
			this.pauseBtn.classList.remove('icon-play');
			
			// Add pause icon
			this.pauseBtn.classList.add('icon-pause');
			
			// Video is now playing
			this.videoPlaying = true;

		};

	};

	// Volume Current Video
	toggleVolume (e) {

		// Prevent Default
		e.preventDefault();

		if(this.volume && this.videoPlayer.classList.contains('playing')){
			
			// Mute Video
			this.videoPlayer.muted = true;

			// Remove sound icon on Volume Button
			this.volumeBtn.classList.remove('icon-sound');
			
			// Mute icon
			this.volumeBtn.classList.add('icon-mute-video');

			// No more volume, false
			this.volume = false;

		} else if (this.videoPlayer.classList.contains('playing')) {

			// Mute Video
			this.videoPlayer.muted = false;

			// Remove sound icon on Volume Button
			this.volumeBtn.classList.remove('icon-mute-video');
			
			// Mute icon
			this.volumeBtn.classList.add('icon-sound');

			// Creating volume, true
			this.volume = true;			

		};

	};

};