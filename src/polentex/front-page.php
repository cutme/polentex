<?php
/**
 * Template Name: Strona główna
 */

get_header(); ?>
	
	<?php
		get_template_part('partials/assortment');
		get_template_part('partials/areas');
		get_template_part('partials/popular');
		get_template_part('partials/clients');
		get_template_part('partials/contact');
	?>
	

<?php get_footer(); ?>
