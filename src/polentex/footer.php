<?php
/**
 * The template for displaying the footer.
 */
?>

	
	
	
	</div><!-- /container -->
	
	
	<div class="c-footer" id="footer">
		<div class="o-wrap">

			<a href="index.html" class="c-logo">
				<img src="<?php echo get_template_directory_uri()?>/img/assets/logo-polentex--white.png" alt="polentex" width="230" height="70">
			</a>
			
			<nav class="c-nav">
				<ul>
					<li class="is-active">
						<a href="index.html">Strona główna</a>
					</li>
					
					<li>
						<a href="o-nas.html">O Nas</a>
					</li>
					
					<li class="submenu">
						<a href="produkt.html">Produkty</a>
						
						
					<ul class="c-submenu">
						<li>
							<a href="produkt.html">
								<div class="photo">
									<img src="<?php echo get_template_directory_uri()?>/img/menu/cat01--size1.jpg" alt="" width="150" height="120">
								</div>
								
								<p>Wycieraczki aluminiowe</p>
							</a>
						</li>
						
						<li>
							<a href="produkt.html">
								<div class="photo">
									<img src="<?php echo get_template_directory_uri()?>/img/menu/cat02--size1.jpg" alt="" width="150" height="120">
								</div>
								
								<p>Wycieraczki tekstylne</p>
							</a>
						</li>
						
						<li>
							<a href="produkt.html">
								<div class="photo">
									<img src="<?php echo get_template_directory_uri()?>/img/menu/cat03--size1.jpg" alt="" width="150" height="120">
								</div>
								
								<p>Maty reklamowe</p>
							</a>
						</li>
						
						<li>
							<a href="produkt.html">
								<div class="photo">
									<img src="<?php echo get_template_directory_uri()?>/img/menu/cat04--size1.jpg" alt="" width="150" height="120">
								</div>
								
								<p>Maty BHP ergonomiczne</p>
							</a>
						</li>
						
						<li>
							<a href="produkt.html">
								<div class="photo">
									<img src="<?php echo get_template_directory_uri()?>/img/menu/cat05--size1.jpg" alt="" width="150" height="120">
								</div>
								
								<p>Maty ochronne</p>
							</a>
						</li>
						
						<li>
							<a href="produkt.html">
								<div class="photo">
									<img src="<?php echo get_template_directory_uri()?>/img/menu/cat06--size1.jpg" alt="" width="150" height="120">
								</div>
								
								<p>Akcesoria</p>
							</a>
						</li>
					</ul>

					</li>
					
					<li>
						<a href="kontakt.html">Kontakt</a>
					</li>
				</ul>
			</nav>
		
		</div>
		
		<div class="c-bottom">
			<div class="o-wrap">
				<div class="c-bottom__copyrights">©2017 Polentex. Wszystkie prawa zastrzeżone</div>
				<div class="c-bottom__realization">Realizacja: <a href="//loging.pl">Loging.pl</a></div>
			</div>
		</div>
	</div>
	
	
	<a href="#container" class="c-gotop js-goto js-gotop icon-arrow-squares"></a>


	<?php get_template_part('partials/search')?>



<?php wp_footer(); ?>

</body>
</html>
	
