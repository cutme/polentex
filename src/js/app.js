$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.onscroll = function(){console.log('f');
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + (scrollTop / this.speed) + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});



(function(window, document, $, polentex, undefined) {
	'use strict';


	$(document).ready(function() {


		Pace.on('done', function() {
			polentex.Helper.viewport(['areas', 'clients', 'homeslider', 'map']);
			if (polentex.Helper.exist('.anim')) polentex.Helper.showOnScroll();
		});



		if (polentex.Helper.exist('.js-goto')) {
		
			$('.js-goto').on('click', function(e) {
				e.preventDefault();
				var target = $(this).attr('href');

				polentex.Helper.goToTarget(target);
			});			
		}
		
		//polentex.Helper.viewport(['areas', 'clients', 'homeslider', 'map']);
		polentex.Nav.init();

		
		if (polentex.Helper.exist('.b-lazy')) polentex.Helper.blazy();
		if (polentex.Helper.exist('.mfp')) polentex.Magnific.init();
		if (polentex.Helper.exist('.js-popular')) polentex.Slider.popular();	
		if (polentex.Helper.exist('.js-search')) polentex.Search.init();
		if (polentex.Helper.exist('.js-tabs')) polentex.Tabs.init();
	});

		
}(window, document, jQuery, window.polentex = window.polentex || {}));

