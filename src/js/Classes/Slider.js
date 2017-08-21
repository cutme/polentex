(function(window, document, $, polentex, undefined) {
	'use strict';
	
	var Slider = polentex.Sliders = function () { };
	
	
	Slider.prototype.clients = function() {

		var carousel = document.querySelectorAll('.js-clients'),
			owl = $(carousel).owlCarousel({
				autoplay: true,
				dotsContainer: '.c-clients__dots',
				lazyLoad: true,
				loop: true,
				responsive: {
					0: {
						items: 2
					},
					480: {
						items: 3
					},
					768: {
						items: 4
					},
					1170: {
						items: 5
					}
				}

			});		
	};
	

	Slider.prototype.interactive = function(el) {
		
		var obj = document.getElementById(el),
			carousel = obj.querySelectorAll('.owl-carousel'),
			tab = obj.querySelectorAll('.js-tab'),
			owl = $(carousel).owlCarousel({
				animateOut: 'fadeOut',
				autoplay: false,
				items: 1,
				lazyLoad: false,
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

