
(function(window, document, $, polentex, undefined) {
	'use strict';


	$(document).ready(function() {		

		if (polentex.Helper.exist('.anim')) polentex.Helper.showOnScroll();
		if (polentex.Helper.exist('.b-lazy')) polentex.Helper.blazy();

		if (polentex.Helper.exist('.js-clients')) polentex.Slider.clients();
		if (polentex.Helper.exist('.js-interactive')) polentex.Slider.interactive();
		if (polentex.Helper.exist('.js-popular')) polentex.Slider.popular();
		
		if (polentex.Helper.exist('#map')) polentex.googleMap.init();
		
		
		/*
polentex.Helper.cookies();
		polentex.Helper.isMobile();
		polentex.Helper.language();
		polentex.Menu.init();
		

		if (polentex.Helper.exist('#accordion')) polentex.Accordion.init('#accordion');		
		
		if (polentex.Helper.exist('#contact-map')) polentex.ContactMap.init();
		if (polentex.Helper.exist('#filters')) polentex.Filters.init();
		if (polentex.Helper.exist('#homeSlider')) polentex.Slider.init();
		if (polentex.Helper.exist('#locationMap')) polentex.LocationMap.init();
		if (polentex.Helper.exist('#masonry')) masonryInit();
		if (polentex.Helper.exist('#offerCarousel')) polentex.OfferCarousel.init();
		if (polentex.Helper.exist('#offerContact')) polentex.OfferContact.init();
		if (polentex.Helper.exist('#questionForm')) polentex.QuestionForm.init();
		if (polentex.Helper.exist('#rentSale')) polentex.Switcher.rentSale();
		if (polentex.Helper.exist('#shortcuts')) polentex.Accordion.init('#shortcuts');		
		if (polentex.Helper.exist('#shortcuts')) polentex.Shortcuts.init();
		if (polentex.Helper.exist('#viewType')) polentex.Switcher.viewType();


				if (polentex.Helper.exist('.mfp-image')) polentex.Magnific.images();
		if (polentex.Helper.exist('.mfp-video')) polentex.Magnific.video();
		if (polentex.Helper.exist('.nice-select')) polentex.Helper.nSelect();
		if (polentex.Helper.exist('.c-top')) polentex.Helper.fixTop();
		
*/
		
		
	});
	


		
}(window, document, jQuery, window.polentex = window.polentex || {}));

