<?php

get_header(); ?>

	<div class="page-content">

		<?php get_template_part('partials/breadcrumbs')?>

		<?php if ( have_posts() ): ?>

			<?php while ( have_posts() ) : the_post(); ?>

				<header>
					<h1><?php the_title()?></h1>
				</header>

				<article class="typo">
					<?php the_content()?>
				</article>

			<?php endwhile; // end of the loop. ?>

		<?php endif?>

	</div>

<?php get_template_part('partials/aside')?>

<?php get_footer(); ?>