(function(){
	
	$.fn.juanCarousel = function(options){
		return this.each(function(){
			var carousel = new JuanCarousel(this, options);
		});
	};
	
	function JuanCarousel(element, options){
		this.element = element;
		this.options = options;
		this.load_photos;
	};
	
	JuanCarousel.prototype.load_photos = function(){
		var instance = this;
		
		$.ajax({
			url: '/photos.json',
			type: 'GET',
			dataType: 'json',
			success: function(response){
				instance.photos = response.photos;
				this.instance.show_photos();
				setInterval(this.instance.advance, 3000);
			}
		});
		
	};
	
	// JuanCarousel.prototype.display_photos = function(){
	// 	for (var i=0; i < this.photos.length; i++) {
	// 		img = this.photos[i];
	// 		$('.carousel .image_container').html('<img src="' + img.src + '" />');
	// 		$('.carousel .text_container').html(img.text);			
	// 	}
	// };
	// 
	
	JuanCarousel.prototype.next_photos = function(){
		this.current_index = this.current_index + 1;
		if (this.current_index > (this.photos.length -1)) {
			this.current_index = 0;
		}
	};

	JuanCarousel.prototype.show_photos = function() {		
		$('.carousel .image_container').html('<img src="' + img.photos[this.current_index].src + '" />');
		$('.carousel .text_container').html(img.text);
	};
	
	JuanCarousel.prototype.advance = function() {
		next_image();
		show_image();
	};	
})();




