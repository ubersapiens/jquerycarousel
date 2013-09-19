(function(){

	$.fn.juanCarousel = function(options){

		//The method .each needs to be placed into the function to maintain chainability
		return this.each(function(){  
			new JuanCarousel(this, options);  
		});
	};

	function JuanCarousel(element, options){
		this.element = $(element);
		this.options = options;
		this.current_index = 0;
		this.setup();
		this.load_photos();
	};

	JuanCarousel.prototype.setup = function(){
		this.element.append('<div class="image_container"></div>');
		this.element.append('<div class="text_container"></div>');
		this.element.append('<div class="controls_container"></div>');
		this.element.append('<div class="controls_container"><img src="/images/play_icon.png" id="play_button" /> </div>');
		this.element.append('<div class="controls_container"><img src="/images/stop_icon.jpg" id="pause_button" /> </div>');
		this.element.append('<div class="controls_container"><img src="/images/back_icon.png" id="back_button" /> </div>');
		this.element.append('<div class="controls_container"><img src="/images/forward_icon.png" id="forward_button" /> </div>');
	};

	JuanCarousel.prototype.load_photos = function(){
		var instance = this;

		$.ajax({
			url: '/photos.json',
			type: 'GET',
			dataType: 'json',
			success: function(response){
				instance.photos = response.photos;
				instance.next_photos();
				instance.last_photos();
				instance.show_photos();
				$('#forward_button').click(function() {
					instance.advance();
				});
				$('#back_button').click(function() {
					instance.rewind();
				});
				var interval = setInterval(function(){
					instance.advance.apply(instance);
				}, 3000);
				$('#pause_button').click(function () {
					clearInterval(interval);
				})
				// $('#play_button').click(function () {
				// 	console.log(this);
				// 	setInterval(3000);
				// })
			}
		});
	}; 

	JuanCarousel.prototype.show_photos = function() {	
		this.element.find('.image_container').html('<img src="' + this.photos[this.current_index].src + '" />');
		this.element.find('.text_container').html('<p>' + this.photos[this.current_index].caption + ' </p>');
	};

	JuanCarousel.prototype.next_photos = function(){
		this.current_index = this.current_index + 1;
		if (this.current_index > (this.photos.length -1)) {
			this.current_index = 0;
		}
	};

	JuanCarousel.prototype.last_photos = function() {
		this.current_index = this.current_index + 1;
		if (this.current_index > (this.photos.length +1)) {
			this.current_index = 0;
		}
	};

	JuanCarousel.prototype.advance = function() {
		this.next_photos();
		this.show_photos();
	};	

	JuanCarousel.prototype.rewind = function() {
		this.last_photos();
		this.show_photos();
	};


})();
