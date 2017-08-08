(function(window, document, $, polentex, undefined) {
	'use strict';

	var Search = polentex.Searchs = function () { },
		body = document.getElementsByTagName('body'),
		container = document.getElementById('container'),
		lens = document.querySelectorAll('.js-search'),
		listenKeys,
		searchPage = document.getElementById('search'),
		searchField = document.getElementById("s"),
		clickListener,
		searchForm = document.getElementById('searchForm'),
		top = document.getElementById('top');

    
    Search.prototype.init = function() {		

		$(lens).on('click', function(e) {
			e.preventDefault();
			Search.prototype.start();
		});	
    };
    
    Search.prototype.start = function() {	
    
    	var e = $(top).detach();
			$(container).prepend(e);

     	polentex.Helper.addClassF(container, 'is-dimmed');
 	   	polentex.Helper.addClassF(searchPage, 'is-visible');
     	
		clickListener = function(event) {
			var isClickInside = searchForm.contains(event.target);
			
			if (isClickInside) {
				console.log('You clicked inside');
			}
			else {
				Search.prototype.destroy();
			}
		};

		setTimeout(function() {
			searchField.focus();
		}, 600);

     	listenKeys = function(evt) {			
		    evt = evt || window.event;
		    if (evt.keyCode == 27) {
				Search.prototype.destroy();
		    }
		};

		searchPage.addEventListener('click', clickListener, false);
		document.addEventListener('keydown', listenKeys, false);		
     };

	 Search.prototype.destroy = function() {
	 
	 	var e = $(top).detach();
			$(body).prepend(e);

     	$(container).removeClass('is-dimmed');

     	document.removeEventListener('keydown', listenKeys);
     	searchPage.removeEventListener('click', clickListener);
     	
     	$(searchPage).removeClass('is-visible');
     };


	polentex.Search = new Search();

}(window, document, jQuery, window.polentex = window.polentex || {}));

