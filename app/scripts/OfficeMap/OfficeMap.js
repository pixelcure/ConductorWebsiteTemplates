  //////////////////////////////////////////////
 // Office Map ////////////////////////////////
//////////////////////////////////////////////



// This script controls the map and will only build if
// there is an element with an id of #officeMap

// Google Maps
import GoogleMapsLoader from 'google-maps';

// GOOGLE SETTINGS:
///////////////////

// Google Maps API Key
GoogleMapsLoader.KEY = 'AIzaSyDe5DYJZUSe9nw6NjyrYnxMAD3rH4khQY4';

// Language
GoogleMapsLoader.LANGUAGE = 'en';

// Region
GoogleMapsLoader.REGION = 'US'

		
var OfficeMap = GoogleMapsLoader.load(function(google){

		// Does the DOM contain an #officeMap?
		if(document.getElementById('officeMap')){

			// Instantiate new map
			const map = new google.maps.Map(document.getElementById('officeMap'), {
				center: {lat: 42.348714, lng: -71.072282},
		    	zoom: 19,
				disableDefaultUI: true,
				scrollwheel: false
		    });

			// Place marker on map, using custom marker icon / title pulled from data attributes
		    const marker = new google.maps.Marker({
		        position : {
		            lat: 42.348714, 
		            lng: -71.072282
		        },
		        map: map,
		        title: document.getElementById('officeMap').dataset.markertitle,
		        icon: document.getElementById('officeMap').dataset.markericon
		    });

		    // Set map styles
		    map.set('styles', [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]);    					

		};

});


// Export OfficeMap class
export { OfficeMap }