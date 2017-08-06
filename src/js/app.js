
(function(window, document, $, polentex, undefined) {
	'use strict';


	$(document).ready(function() {	

		if (polentex.Helper.exist('.js-goto')) {
		
			$('.js-goto').on('click', function(e) {
				e.preventDefault();
				var target = $(this).attr('href');

				polentex.Helper.goToTarget(target);
			});			
		}
		
		polentex.Helper.viewport(['areas', 'clients', 'homeslider', 'map']);

		if (polentex.Helper.exist('.anim')) polentex.Helper.showOnScroll();
		if (polentex.Helper.exist('.b-lazy')) polentex.Helper.blazy();
		if (polentex.Helper.exist('.js-popular')) polentex.Slider.popular();	
		if (polentex.Helper.exist('.js-search')) polentex.Search.init();
	});

		
}(window, document, jQuery, window.polentex = window.polentex || {}));

