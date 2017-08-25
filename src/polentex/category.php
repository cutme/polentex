<?php
/**
 * The template for displaying Category Archive pages.
 *
 * @package Oxford
 * @since Oxford 0.1
 */

get_header(); ?>

				
		<?php if ( have_posts() ): ?>
		
					<?php single_cat_title( '', false )?>
		
					<?php while ( have_posts() ) : the_post(); ?>
	
							<?php the_title()?>
								
							<?php the_content()?>		
							
					<?php endwhile; // end of the loop. ?>
					
					
		<?php else :?>		
		
		
				<?php _e( 'Well this is somewhat embarrassing, isn&rsquo;t it?', 'meduza' ); ?>
			
				<?php _e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching, or one of the links below, can help.', 'meduza' ); ?>

				<?php get_search_form(); ?>
			

		<?php endif?>					
		
		<?php get_sidebar(); ?>
				

<?php get_footer(); ?>
