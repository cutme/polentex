<?php

function register_my_menu() {
  register_nav_menu('main-menu',__( 'Main Menu' ));
}
add_action( 'init', 'register_my_menu' );


	//Rejestracja styli i skryptów
	
	add_action( 'wp_enqueue_scripts', 'wpsam_theme_enqueue' );
	
	function wpsam_theme_enqueue()
	{
		// STYLES

		// Register style
		wp_register_style( 'wpsam-libs', get_template_directory_uri() . '/css/libs.css', null, WPSAM_VERSION);
		wp_register_style( 'wpsam-style', get_template_directory_uri() . '/css/style.css', null, WPSAM_VERSION);

		// Enqueue style
		wp_enqueue_style( 'wpsam-libs' );
		wp_enqueue_style( 'wpsam-style' );


		// SCRIPTS


		// Footer

		wp_register_script( 'libs', get_template_directory_uri() . '/js/libs.js', null, WPSAM_VERSION, true );
		wp_register_script( 'script', get_template_directory_uri() . '/js/script.js', null, WPSAM_VERSION, true );


		// Enqueue script
		wp_enqueue_script( 'libs' );
		wp_enqueue_script( 'script' );
		
		
		
		// Rejestrujemy wymiary obrazków
		add_image_size( 'founder', 380, 364, true );
	}



	/**
	 * Dodajemy obsługę miniatur 
	 */
	add_theme_support( 'post-thumbnails' ); 
	

	/**
	 * Rejestrujemy główny styl bloga
	 */
	add_action( 'wp_head', 'wpsam_theme_style_css' );
	function wpsam_theme_style_css()
	{?>
				<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>">
	<?php
	}
	
	
	
	
	
	
/**
	 * Dodajemy excerpt dla Pages
	 
	add_action( 'init', 'my_add_excerpts_to_pages' );
	function my_add_excerpts_to_pages() {
		add_post_type_support( 'page', 'excerpt' );
	}
*/


/**
	 * remove <!-- more --> bloat
	 

	add_filter( 'the_content', 'remove_more_bloat' );
	function remove_more_bloat( $content ) { 
		global $post;
	
	
		if ( is_singular() )
			$content = str_replace( '<p><span id="more-' . $post->ID . '"></span></p>', '', $content ); // replace the <span> with an empty string
		return $content;	
	}
*/


	/**
	 * Ustawiamy domyślny rozmiar obrazka w galerii na gallery-image (normalnie to jest thumbnail)
	 */
	/*
	add_filter( 'shortcode_atts_gallery', 'wpsam_set_gallery_default_image_size', 10, 3 );
	function wpsam_set_gallery_default_image_size( $out, $pairs, $atts ) {
		 
		$atts = shortcode_atts( array(
				'size' => 'gallery-image',
		), $atts );
	
		$out['size'] = $atts['size'];
	
		return $out;
	
	}
	*/
	
	
	// Replaces the excerpt "more" text by a link
	/*
	add_filter('excerpt_more', 'wpsam_excerpt_more');
	function wpsam_excerpt_more($more) {
		return '...';
	}
	*/
	
	
	//wyłączamy domyślne stylowanie galerii
	/*

	add_filter( 'use_default_gallery_style', 'wpsam_gallery_style' ) ;
	function wpsam_gallery_style(){
		return false;
	}

	*/
	
	/**
	 * Ktoś wpadł na "genialny" pomysł, aby nie ustawiać automatycznie znacznika title
	 * na podstawie wypełnionego tytułu dla obrazka
	 * //http://core.trac.wordpress.org/ticket/18984
	 * 
	 * Na szczęście mozna to przywrócić :)
	 * //http://wordpress.org/plugins/restore-image-title/developers/
	 * 
	 * @param unknown $html
	 * @param unknown $id
	 * @return unknown|mixed
	 */
	/*
	add_filter( 'media_send_to_editor', 'wpsam_restore_image_title', 15, 2 );
	function wpsam_restore_image_title( $html, $id ) {

		$attachment = get_post($id);
	    if (strpos($html, "title=")) {
	    	return $html;
	    }
	    else 
		{
			$mytitle = esc_attr($attachment->post_title);
			return str_replace('<img', '<img title="' . $mytitle . '" '  , $html);      
		}
	}
	*/
