(function(){

	$.fn.juanCarousel = function(options){
		return this.each(function(){
			var carousel = new JuanCarousel(this, options);
		});
	};

	function JuanCarousel(element, options){
		this.element = element;
		this.options = options;
		this.current_index = 0;
		this.load_photos();
	};

	JuanCarousel.prototype.load_photos = function(){
		console.log(this);
		var instance = this;

		$.ajax({
			url: '/photos.json',
			type: 'GET',
			dataType: 'json',
			success: function(response){
				instance.photos = response.photos;
				instance.show_photos();
				setInterval(function(){
					instance.advance.apply(instance);
				}, 3000);
			}
		});

	}; 
	
	JuanCarousel.prototype.show_photos = function() {	
		console.log(this);
		$('.carousel .image_container').html('<img src="' + this.photos[this.current_index].src + '" />');
		$('.carousel .text_container').html(this.text);
	};

	JuanCarousel.prototype.next_photos = function(){
		console.log(this);
		this.current_index = this.current_index + 1;
		if (this.current_index > (this.photos.length -1)) {
			this.current_index = 0;
		}
	};

	JuanCarousel.prototype.advance = function() {
		console.log(this);
		this.next_photos();
		this.show_photos();
	};	
})();





