<?php
	$adres = get_field('adres', 'option');
	
	$dane_adresowe = get_field('dane_adresowe', 'option');
	$dane_kontaktowe = get_field('dane_kontaktowe', 'option');
	
	$fax = get_field('fax', 'option');
	
	$formularz = get_field('formularz_kontaktowy', 'option');
	
	$tel1 = get_field('telefon_1', 'option');
	$tel2 = get_field('telefon_2', 'option');
	
	
	$kom1 = get_field('komorka_1', 'option');
	$kom2 = get_field('komorka_2', 'option');
	$kom3 = get_field('komorka_3', 'option');
	
	$email = get_field('e-mail', 'option');
	
	$godziny = get_field('godziny_otwarcia', 'option');
	
	$siedziba = get_field('siedziba_firmy', 'option');
?>

		<div class="o-section o-section--normal bg-white">
			<div class="o-wrap">
			
				<div class="c-contact">
					<div class="c-contact__col c-contact__col--left anim anim--left">
						<article>
							<div class="o-header o-header--border">
								<h4><?= $siedziba; ?></h4>
							</div>
						
							<h5><?= $dane_adresowe; ?></h5>

							<p><?= $adres; ?></p>
							<p><strong>Tel:</strong>  <?= $tel1;?>;  <?= $tel2; ?></p>
							<p><strong>Fax:</strong>  <?= $fax; ?></p>
							<p><strong>Kom:</strong>  <?= $kom1; ?>;  <?= $kom2; ?>;   <?= $kom3; ?></p>
							<p><strong>E-mail:</strong> <a href="mailto:<?= $email; ?>"><?= $email; ?></a></p>
							<p><strong>Godziny otwarcia:</strong>  <?= $godziny; ?></p>
						</article>
					
						<div class="c-map">
							<div id="map" class="c-map__map" data-lat="54.384389" data-lng="18.632575"></div>							
						</div>
					</div>


					<div class="c-contact__col c-contact__col--right anim anim--right">
						<div class="o-header o-header--border">
							<h4><?= $formularz; ?></h4>
						</div>
					
					
						<h5><?= $dane_kontaktowe; ?></h5>
						
						<form action="#" class="o-form">
							<div class="half">
								<label>Imię</label>
								<input type="text">
							</div>
							
							<div class="half">
								<label>Nazwisko</label>
								<input type="text">
							</div>

							<label>Nazwa firmy</label>
							<input type="text">

							<div class="half">
								<label>E-mail</label>
								<input type="text">
							</div>
							
							<div class="half">
								<label>Telefon kontaktowy</label>
								<input type="text">
							</div>

							<label>Adres</label>
							<input type="text">
							
							<label>Treść wiadomości</label>
							<textarea></textarea>
							
							<div class="attachment">
								<p>Dodaj szczegóły zamówienia</p>
								
								<a href="#" class="o-btn o-btn--small o-btn--fill o-btn--gray o-btn--plus">Dodaj załącznik</a>
							</div>
							
							<button type="submit" class="o-btn o-btn--fill o-btn--red">Wyślij</button>
						</form>

					</div>

				</div>
					
			</div>
		</div>
