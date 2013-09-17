(function(){

	$.fn.juanCarousel = function(options){
		return this.each(function(){
			var carousel = new JuanCarousel(this, options);  
		});
	};

	function JuanCarousel(element, options){
		this.element = $(element);
		this.options = options;
		this.current_index = 0;
		this.load_photos();
	};

	JuanCarousel.prototype.load_photos = function(){
		var instance = this;

		$.ajax({
			url: '/photos.json',
			type: 'GET',
			dataType: 'json',
			success: function(response){
				instance.photos = response.photos;
				instance.show_photos();
				instance.carousel_prev();
				instance.carousel_next();
				// setInterval(function(){
				// 	instance.advance.apply(instance);
				// }, 3000);
			}
		});
	}; 
	
	JuanCarousel.prototype.show_photos = function() {	
		this.element.find('.image_container').html('<img src="' + this.photos[this.current_index].src + '" />');
	};

	JuanCarousel.prototype.next_photos = function(){
		this.current_index = this.current_index + 1;
		if (this.current_index > (this.photos.length -1)) {
			this.current_index = 0;
		}
	};

	JuanCarousel.prototype.advance = function() {
		this.next_photos();
		this.show_photos();
	};	
	
	JuanCarousel.prototype.carousel_prev = function() {
		console.log('Carousel prev loaded');
		this.element.find('#carousel_prev').click(function(e) {
			e.preventDefault();
		});
	};
	
	JuanCarousel.prototype.carousel_next = function() {
		console.log('Carousel next loaded');
	  this.element.find('#carousel_next').click(function(e) {
	    e.preventDefault();
	  });
	};	
	
	
})();
