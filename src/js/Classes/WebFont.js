	WebFontConfig = {
		google: {
			families: ['Open+Sans:300,400,600,700:latin-ext', 'Noto+Serif:400:latin-ext']
		},
		active: function() { 

		}
	};

	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();
