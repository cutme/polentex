<?php
/**
 * Template Name: O nas
 */

get_header(); ?>
	
		<div class="o-section o-section--normal bg-gray">
			<div class="o-wrap">
			
		<?php if ( have_posts() ): ?>	
			<?php while ( have_posts() ) : the_post(); ?>
			
				<article class="c-article c-article--indent anim anim--fade">
					<header class="o-header">
						<h1>
							<em><?php the_title(); ?></em>
						</h1>
					</header>

					<?php the_content(); ?>
				</article>
							
			<?php endwhile; ?>
		<?php endif; ?>
			</div>
		</div>
		
		
		<div class="o-section o-section--low bg-white">
			<div class="o-wrap">
			
				<img src="<?php echo get_template_directory_uri(); ?>/img/assets/founder.png" alt="" width="380" height="364" class="anim anim--left">
				
				<article class="c-article c-article--negative">
					
					<h3>
					Ut nec bibendum diam. Nullam sed libero luctus, blandit ex ac, faucibus purus. Donec hendrerit nisi eget hendrerit vestibulum.
					</h3>
					
					<p>
In porta bibendum felis, eget molestie erat tincidunt non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lectus suscipit, congue velit non, porta enim. Integer semper euismod consequat. Nulla in laoreet sem, id mollis tellus.
					</p>
				</article>
				
				<div class="c-contactbar c-contactbar--negative anim anim--right">
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
