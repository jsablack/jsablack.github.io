window.onload = function(){
	var map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.88, lng: 87.629},
		zoom: 8
	});
	}
	initMap();
};