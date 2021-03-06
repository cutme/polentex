
(function(window, document, $, polentex, undefined) {
	'use strict';


	$(document).ready(function() {


		Pace.on('done', function() {
			polentex.Helper.viewport(['areas', 'clients', 'homeslider', 'map']);
			if (polentex.Helper.exist('.anim')) polentex.Helper.showOnScroll();
			
			if (polentex.Helper.exist('#tabsNav')) polentex.Helper.fixEl('#tabsNav');
		});



		if (polentex.Helper.exist('.js-goto')) {
		
			$('.js-goto').on('click', function(e) {
				e.preventDefault();
				var target = $(this).attr('href');

				polentex.Helper.goToTarget(target);
			});			
		}
		
		
		
		if(window.location.hash) {
			var target = window.location.hash;
			
			setTimeout(function() {
			polentex.Helper.goToTarget(target);
			}, 1000);
		}
		
		//polentex.Helper.viewport(['areas', 'clients', 'homeslider', 'map']);
		polentex.Nav.init();
		polentex.Helper.isMobile();
		polentex.Helper.relocations();
		
		if (polentex.Helper.isWindowSmallerThan(1025) === false) {
			polentex.Helper.parallax();
		}
		
		
		
		
		if (polentex.Helper.exist('.b-lazy')) polentex.Helper.blazy();
		if (polentex.Helper.exist('.mfp')) polentex.Magnific.init();
		if (polentex.Helper.exist('.js-popular')) polentex.Slider.popular();	
		if (polentex.Helper.exist('.js-search')) polentex.Search.init();
		if (polentex.Helper.exist('.js-tabs')) polentex.Tabs.init();
		
		
	});

		
}(window, document, jQuery, window.polentex = window.polentex || {}));



