(function(window, document, $, polentex, undefined) {
	'use strict';

	var Nav = polentex.Navs = function () { };
		
	
	Nav.prototype.init = function() {
		this.menu();
	};
    
    Nav.prototype.menu = function() {		

		var submenu = document.querySelectorAll('.submenu'),
			container = document.getElementById('container'),
			top = document.getElementById('top'),
			body = document.getElementsByTagName('body');


		$(submenu).on('mouseenter', function() {
			
			$(body).addClass('is-black');
			polentex.Helper.addClassF(container, 'is-dimmed');
			
			/*
var e = $(top).detach();
			$(body).prepend(e);
*/
			
		});
		
		$(submenu).on('mouseleave', function() {
			
			$(body).removeClass('is-black');
			$(container).removeClass('is-dimmed');
			
			/*
var e = $(top).detach();
			$(container).prepend(e);
*/
			
		});
    };
    
    
	polentex.Nav = new Nav();

}(window, document, jQuery, window.polentex = window.polentex || {}));

