$(document).ready(function(){
	
	$('.carousel').juanCarousel({
		url: '/photos.json',
		speed: '', // option to change the speed,
		onChange: function(photos){
			
		}
	});
	
});

