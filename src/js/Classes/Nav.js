(function(window, document, $, polentex, undefined) {
	'use strict';

	var Nav = polentex.Navs = function () { };
		
	
	Nav.prototype.init = function() {
		this.menu();
		this.mobile();
		
		if (polentex.Helper.exist('#navProducts')) this.products();
	};
    
    Nav.prototype.menu = function() {		

		var submenu = $('.c-nav .menu-item-has-children'),
			container = document.getElementById('container'),
			top = document.getElementById('top'),
			body = document.getElementsByTagName('body');


		submenu.on('mouseenter', function() {
			if ( $(window).width() > 1024 ) {
				$(body).addClass('is-black');
				polentex.Helper.addClassF(container, 'is-dimmed');
			}
		
		});
		
		submenu.on('mouseleave', function() {
			if ( $(window).width() > 1024 ) {
				$(body).removeClass('is-black');
				$(container).removeClass('is-dimmed');
			}
		});
    };
    
    
	Nav.prototype.mobile = function() {		

		var menu = document.getElementById('nav'),
			body = document.getElementsByTagName('body'),
			hamburger = document.querySelectorAll('.js-hamburger');


		$(hamburger).on('click', function(e) {
			e.preventDefault();
			$(menu).toggleClass('is-visible');
			
			$(this).toggleClass('icon-hamburger icon-close');
		});
		
		$('.sub-menu', menu).on('click', function(e) {
			//if (polentex.Helper.isWindowSmallerThan(769) === true) {
				//e.preventDefault();
				//alert('s');
			//}
		});
    };
    
    
    Nav.prototype.products = function() {		

		var menu = document.getElementById('navProducts'),
			path;

		$('a', menu).on('click', function(e) {
			e.preventDefault();
			
			var $$ = $(this);
			
			
			if ( $$.next('ul').length > 0 ) {
				
				$$.parents('.menu-item:first-child').addClass('is-active');
			
				$$.next('ul').slideToggle(400, function() {
					
					path = $$.parents('.menu-item:first-child');
					
					if ( $('> ul', path).css('display') === 'none' ) {
						
						path.removeClass('is-active');

						$('ul > li ul', path).attr('style', '');
					}
				});
					
			} else {
				document.location = $(this).attr('href');
			}
		});
    };
    
    
	polentex.Nav = new Nav();

}(window, document, jQuery, window.polentex = window.polentex || {}));

