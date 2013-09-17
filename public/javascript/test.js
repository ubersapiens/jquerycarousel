// (function(){
// 
//   $.fn.juanCarousel = function(options){
//     return this.each(function(){
//       var carousel = new JuanCarousel(this, options);
//     });
//   };
// 
//   function JuanCarousel(element, options){
//     this.element = element;
//     this.options = options;
// 
//     this.load_photos(function(){
//       this.display_photos();
//     });
//   };
// 
//   JuanCarousel.prototype.load_photos = function(callback){
//     var instance = this;
// 
//     $.ajax({
//       url: '/photos.json',
//       type: 'GET',
//       dataType: 'json',
//       success: function(response){
//         instance.photos = response.photos;
//         callback.apply(instance);
//       }
//     });
// 
//   };
// 
//   JuanCarousel.prototype.display_photos = function(){
//     for (var i=0; i < this.photos.length; i++) {
//       img = this.photos[i];
//       $('.carousel .image_container').html('<img src="' + img.src + '" />');
//       $('.carousel .text_container').html(img.text);			
//     }
//   };
// 
// })();