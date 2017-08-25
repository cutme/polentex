<?php
/**
 * Header template
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
	<meta charset="<?php echo get_bloginfo( 'charset' ); ?>">
	<title><?php wp_title(); ?></title>
	
	<!--[if lt IE 9]>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
    <![endif]-->

	<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.ico" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<?php get_template_part('partials/top'); ?>


	<div class="o-container" id="container"> 

		<?php get_template_part('partials/slider--homeslider'); ?>
	

