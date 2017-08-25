<?php
/**
 * Template Name: Kontakt
 */

get_header(); ?>

		<div class="o-section o-section--normal bg-gray">
			<div class="o-wrap">
			
		<?php if ( have_posts() ): ?>	
			<?php while ( have_posts() ) : the_post(); ?>
			
				<article class="c-article c-article--indent anim anim--up">
					<header class="o-header">
						<h1>
							<em><?php the_title(); ?></em>
						</h1>
					</header>
					
					<?php the_content(); ?>
				</article>
				
			<?php endwhile; ?>
		<?php endif; ?>

			
				<div class="c-contactbar c-contactbar--indent">
					<?php
						get_template_part('partials/contactbar');
					?>
				</div>
			</div>
		</div>


	<?php
		get_template_part('partials/contact');
	?>
	

<?php get_footer(); ?>
