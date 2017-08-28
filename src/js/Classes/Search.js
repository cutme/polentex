(function(window, document, $, polentex, undefined) {
	'use strict';

	var Search = polentex.Searchs = function () { },
		body = document.getElementsByTagName('body'),
		container = document.getElementById('container'),
		footer = document.getElementById('footer'),
		lens = document.querySelectorAll('.js-search'),
		listenKeys,
		searchPage = document.getElementById('search'),
		searchField = document.getElementById("s"),
		clickListener,
		searchForm = document.getElementById('searchForm'),
		top = document.getElementById('top'),
		tabsNav = document.getElementById('tabsNav');

    
    Search.prototype.init = function() {		

		$(lens).on('click', function(e) {
			e.preventDefault();
			Search.prototype.start();
		});	
    };
    
    Search.prototype.start = function() {	
    
    	var e = $(top).detach();
			$(container).prepend(e);
			
		var f = $(footer).detach();
			$(container).append(f);

		$(body).addClass('is-black');
     	polentex.Helper.addClassF(container, 'is-dimmed');
     	
     	
     	if (polentex.Helper.exist('#tabsNav')) {
	     	polentex.Helper.addClassF(tabsNav, 'is-dimmed');
     	}
 	   	polentex.Helper.addClassF(searchPage, 'is-visible');
 	   	
     	
		clickListener = function(event) {
			var isClickInside = searchForm.contains(event.target);
			
			if (isClickInside) {
				//console.log('You clicked inside');
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
			
		var f = $(footer).detach();
			$(body).append(f);

		$(body).removeClass('is-black');
     	$(container).removeClass('is-dimmed');
     	if (polentex.Helper.exist('#tabsNav')) {
	     	polentex.Helper.addClassF(tabsNav, 'is-dimmed');
     	}

     	document.removeEventListener('keydown', listenKeys);
     	searchPage.removeEventListener('click', clickListener);
     	
     	$(searchPage).removeClass('is-visible');
     };


	polentex.Search = new Search();

}(window, document, jQuery, window.polentex = window.polentex || {}));

