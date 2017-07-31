(function(window, document, $, polentex, undefined) {
	'use strict';
	
	var Slider = polentex.Sliders = function () { };
	
	
	Slider.prototype.clients = function() {

		var carousel = document.querySelectorAll('.js-clients'),
			owl = $(carousel).owlCarousel({
				autoplay: true,
				dotsContainer: '.c-clients__dots',
				items: 1,
				lazyLoad: true,
				loop: true
			});		
	};
	

	Slider.prototype.interactive = function() {

		var el = document.querySelectorAll('.js-interactive');
			
		$(el).each(function() {

			var carousel = this.querySelectorAll('.owl-carousel'),
				tab = this.querySelectorAll('.js-tab'),
				owl = $(carousel).owlCarousel({
					animateOut: 'fadeOut',
					autoplay: true,
					items: 1,
					lazyLoad: true,
					loop: true
				});

			owl.on('translate.owl.carousel', function(e) {
				$(tab).removeClass('is-active').eq(e.page.index).addClass('is-active');
			});

			$(tab).on('click', function(e) {
				e.preventDefault();

				var index = $(this).index(); 	
				owl.trigger('to.owl.carousel', index);
			});
		});
	};
	
	
	Slider.prototype.popular = function() {
	
		var nav = $('.js-popularNav'),
			current_page = $('.js-popularNav .current'),
			pages= $('.js-popularNav .all');


		var carousel = document.querySelectorAll('.js-popular');
		
				
		var owl = $(carousel).on('initialized.owl.carousel', function(e) {

			pages.text(e.item.count);

			}).owlCarousel({
				animateOut: 'fadeOut',
				autoplay: false,
				items: 1,
				lazyLoad: true,
				loop: true,
				nav: true,
				navContainer: '.c-popular__nav',
				navText: ''
			});

			owl.on('translate.owl.carousel', function(e) {
				//page.text(e.page.index);
				current_page.html(e.page.index +1);
			});
			
			
	};
		
	polentex.Slider = new Slider();

}(window, document, jQuery, window.polentex = window.polentex || {}));

