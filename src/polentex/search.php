<?php
/**
 * The template for displaying Search Results pages.
 *
 */

get_header(); ?>

		<?php get_template_part('partials/section-subslider')?>
		
		<?php get_template_part('partials/section-reservation-toolbar')?>
		
		
		<div id="content" class="<?php echo wpsam_get_page_color_schema()?>">
		
			
		
		<article>
			
		<?php get_template_part('partials/breadcrumbs')?>
			
				
				
			<?php if ( have_posts() ): ?>
			
					<header>
						<h1>Wyniki wyszukiwania</h1>
					</header>
			
		
					<?php get_search_form()?>
					
					<section id="results" >
					<ol>
					
						<?php while ( have_posts() ) : the_post(); ?>
		
						
							<li>
								<a href="<?php the_permalink()?>">
									<h2><?php the_title()?></h2>
								</a>
			
								<?php the_excerpt()?>
								<p class="more" >
									<a  href="<?php echo get_permalink()?>">Czytaj dalej → </a>
								</p>
								
							</li>
									
									
						<?php endwhile; // end of the loop. ?>
						
					</ol>
					</section>
		
				<?php get_template_part('partials/pagination')?>	
			
			<?php else :?>	
			
		
					<header>
						<h1>Ooops!</h1>
					</header>
	
					<h2>Trochę to krępujące, ale niestety nie znaleźliśmy niczego dla podanej frazy.</h2>
					
					<p>
						Może spróbuj jeszcze raz:
					</p>
					
					<?php get_search_form()?>
					
				
			<?php endif?>
							
						
	</article>
	
	<?php get_template_part('partials/partial-aside')?>
							
</div>						
										

<?php get_footer(); ?>





