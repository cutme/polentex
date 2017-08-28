(function(window, document, $, polentex, undefined) {
	'use strict';

	var googleMap = polentex.googleMap = function () { };

	
	Map.prototype.init = function() {
		this.init();
	};
    
    Map.prototype.init = function(lat, lng) {

    	var $container = $( '#map' );

    	lat = lat || $container.data( 'lat' );
	    lng = lng || $container.data( 'lng' );

		$.getScript('https://www.google.com/jsapi', function()
		{
			google.load('maps', '3', { 
				other_params: 'key=AIzaSyDzv4gozpcF9CjrI6OWHpLavj2hTLfH4IY', 
				callback: function() {			
			
					var center = new google.maps.LatLng(lat, lng),
						mapStyle = polentex.Helper.mapstyle(),
						myOptions = {
							center: new google.maps.LatLng(lat,lng),
							disableDefaultUI: false,
							draggable: true,
							mapTypeId: google.maps.MapTypeId.ROADMAP,
							scrollwheel: false,
							streetViewControl: false,
							//styles: polentex.Helper.mapstyle(),
							zoom: 17
						},						
						icon = {
							path: "M53.6,0L36.1,17.1l17.4,17.1L71,17.1L53.6,0z M17.4,0L0,17.1l17.4,17.1l17.4-17.1L17.4,0z M18.1,34.9 L35.5,52l17.4-17.1L35.5,17.8L18.1,34.9z",
							fillColor: '#e83c30',
							fillOpacity: 1,
							anchor: new google.maps.Point(32,50),
							strokeWeight: 0,
							scale: 1
						},
							
						map = new google.maps.Map(document.getElementById("map"), myOptions);

					function mapPosition() {
						//map.panBy(140, 140);
					}
					
					mapPosition();
					
					var marker = new google.maps.Marker({
						position: center,
						map: map,
						zIndex: 999,
						animation: google.maps.Animation.DROP,
						icon: icon
					});
	
					var updateCenter = function(){ $.data( map, 'center', map.getCenter() ); };
					
					google.maps.event.addListener( map, 'dragend', updateCenter );
					google.maps.event.addListener( map, 'zoom_changed', updateCenter );
					google.maps.event.addListenerOnce( map, 'idle', function(){ $container.addClass( 'is-loaded' ); });
						
					function setCenter() {
						map.setCenter( new google.maps.LatLng(lat,lng) );
						mapPosition();
					}
		
					google.maps.event.addDomListener(window, 'resize', function() {
						setTimeout(setCenter, 1);
					});
				}
			});
		});
    };
    
   
	polentex.googleMap = new Map();

}(window, document, jQuery, window.polentex = window.polentex || {}));

