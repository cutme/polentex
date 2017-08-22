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
	
		var nav_counter = '<div class="c-popular__nav js-popularNav"><span class="pages"><span class="current">1</span>/<span class="all"></span></span></div>';
			
		//	$('.c-popular').append(nav_counter);
			
		var nav, current_page, pages,
			reinit = false;


		var carousel = document.querySelectorAll('.js-popular');
		
		var carousel_settings;
		
		var carousel_settings_desktop = {
			animateOut: 'fadeOut',
			autoplay: false,
			items: 1,
			lazyLoad: true,
			loop: true,
			nav: true,
			navContainer: '.c-popular__nav',
			navText: ''
		};
		
		var carousel_settings_mobile = {
			autoplay: false,
			lazyLoad: true,
			loop: false,
			nav: true,
			navContainer: '.c-popular__nav',
			navText: '',
			responsive: {
				0: {
					items: 2
				},
				640: {
					items: 3
				},
				840: {
					items: 4
				}
			}
		};
		
		function initialize() {
		
			if ($(window).width() > 1024) {
				carousel_settings = carousel_settings_desktop;
			} else {
				carousel_settings = carousel_settings_mobile;
			}
			
			$('.c-popular').append(nav_counter);
			
			nav = $('.js-popularNav');
			current_page = $('.js-popularNav .current');
			pages= $('.js-popularNav .all');

		
			var owl = $(carousel).on('initialized.owl.carousel', function(e) {
	
				pages.text(e.item.count);
	
				}).owlCarousel(carousel_settings);
	
				owl.on('translate.owl.carousel', function(e) {
					//page.text(e.page.index);
					if ($(window).width() < 1025) {
						current_page.html(e.item.index +1);
					} else {
						current_page.html(e.page.index +1);
					}
				});
		}


		if ($(window).width() < 1025) {
			$('.c-popular__item').unwrap();
			$('.row').remove();	
			initialize();
			reinit = true;
		} else {
			initialize();
		}
			
		
		$(window).on('resize', function() {
			
			if ($(window).width() < 1025) {
				if (reinit === false) {
				
					$(carousel).trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
					$(carousel).find('.owl-stage-outer').children().unwrap();	
					
					
					$('.c-popular__item').unwrap();
					$('.row').remove();				
					
					$(carousel).addClass('owl-carousel');
					initialize();
					
					reinit = true;
					console.log('1');
				}

			} else {
				if (reinit === true) {
				
					console.log('2');
					$(carousel).trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
					$(carousel).find('.owl-stage-outer').children().unwrap();
					
					var divs = $(".c-popular__item");
					for(var i = 0; i < divs.length; i+=5) {
						divs.slice(i, i+5).wrapAll("<div class='row'></div>");
					}
					
					$(carousel).addClass('owl-carousel');
					initialize();
					
					reinit = false;
				}
			}
			
		});			
	};


	polentex.Slider = new Slider();



}(window, document, jQuery, window.polentex = window.polentex || {}));

