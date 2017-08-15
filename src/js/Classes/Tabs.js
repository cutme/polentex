(function(window, document, $, polentex, undefined) {
	'use strict';

	var Tabs = polentex.Tabss = function () { };


    Tabs.prototype.init = function() {		

		var menu = document.getElementById('tabsNav'),
			menu_item = menu.getElementsByTagName('li'),
			content = document.getElementById('tabsContent'),
			content_item = content.querySelectorAll('.js-tab');

			//var nodes = node.querySelector("node > div");

		$(menu_item).on('click', function(e) {
			e.preventDefault();
			
			var index = $(this).index();
			
			if (index !== 0) {
				$(menu_item).removeClass('is-active').eq(index).addClass('is-active');
				$(content_item).hide().eq(index - 1).fadeIn();
			}
		});
    };
    
    
	polentex.Tabs = new Tabs();

}(window, document, jQuery, window.polentex = window.polentex || {}));

