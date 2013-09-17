(function(){

  $.fn.juanCarousel = function(options){
    return this.each(function(){
      var carousel = new JuanCarousel(this, options);
    });
  };

  function JuanCarousel(element, options){
    this.element = element;
    this.options = options;

    this.load_photos(function(){
      this.display_photos();
    });
  };

})();