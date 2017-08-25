<?php
	$lub = get_field('lub_zadzwon', 'option');
	$zapytaj = get_field('zapytaj_o_produkt', 'option');
	$tel1 = get_field('telefon_1', 'option');
	$kom1 = get_field('komorka_1', 'option');
?>
											<a href="kontakt.html" class="o-btn o-btn--fill o-btn--red o-btn--upper"><?= $zapytaj; ?></a>

											<span class="or"><?= $lub; ?></span>
											
											<div class="phones">
												<div><a href="tel:<?= $tel1; ?>"><?= $tel1;  ?></a>;</div> 
												<div><a href="tel:<?= $kom1; ?>"><?= $kom1;  ?></a></div>
											</div>
