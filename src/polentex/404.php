<?php

get_header(); ?>

	<div class="page-content">

		<?php get_template_part('partials/breadcrumbs')?>

		<?php if ( have_posts() ): ?>

			<?php while ( have_posts() ) : the_post(); ?>

				<header>
					<h1>Ooops!</h1>
				</header>

				<article class="typo">
					<h2>Trochę to krępujące, ale niestety nie znaleźliśmy żadnej strony o podanym adresie.</h2>

					<p>
						Spróbuj odnaleść szukaną pozycję w menu lub po prostu skorzystaj z wyszukwiarki:
					</p>
				</article>


			<?php endwhile; // end of the loop. ?>

		<?php endif?>

	</div>

<?php get_template_part('partials/aside')?>

<?php get_footer(); ?>