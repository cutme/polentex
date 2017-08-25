<?php 


if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 	=> 'Konfiguracja',
		'menu_title'	=> 'Konfiguracja',
		'menu_slug' 	=> 'wpsam-theme-general-settings',
	));

}