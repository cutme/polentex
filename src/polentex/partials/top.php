
	<div class="c-top" id="top">
		<div class="o-wrap">
		
			<a href="<?php echo home_url( '/' ); ?>" class="c-logo">
				<img src="<?php echo get_template_directory_uri()?>/img/assets/logo-polentex.png" alt="polentex" width="230" height="70">
			</a>


			<nav class="c-nav" id="nav">
			
				<?php wp_nav_menu(array('theme_location' => 'main-menu', 'items_wrap' => '<ul>%3$s</ul>', 'container'=> 'false', 'container_class' => ''));?>

			</nav>
			
			
			<a href="#" class="icon-hamburger o-hamburger js-hamburger"></a>

			
			<a href="#" class="icon-lens o-lens js-search"></a>

			
			<nav class="c-addons">
			
				<ul class="c-nav-secondary">
					<li class="mapsite">
						<a href="#">Mapa strony</a>
					</li>
					
					<li class="tel">
						<a href="tel:+48583418677">+48 (58) 341 86 77</a>
					</li>
				</ul>
			
				<ul class="c-lang">
					<li class="is-active">
						<a href="#">
							<img src="<?php echo get_template_directory_uri(); ?>/img/assets/flag-pl.png" alt="pl" width="16" height="12" />
						</a>
					</li>
					
					<li>
						<a href="#">
							<img src="<?php echo get_template_directory_uri(); ?>/img/assets/flag-gb.png" alt="gb" width="16" height="12" />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>

