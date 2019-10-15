$(function(){ // script qui declenche l'apparition des boutons et l'animation du slider 

	$('#en_tete_2').animate({'opacity':'0'}, 1000);

	// le slider 

	$('.bouton').click(function(){ // au click, si l'image 1 est visible, elle disparait. Autrement elle apparait

		if($('#en_tete_1').css('opacity') == "1"){

			$('#en_tete_1').animate({'opacity':'0'}, 1000);
			$('#en_tete_2').animate({'opacity':'1'}, 1000);
		}
		else{
			$('#en_tete_1').animate({'opacity':'1'}, 1000);
			$('#en_tete_2').animate({'opacity':'0'}, 1000);
		}
	});

	function bis(){	// en-dessous de 500px les boutons disparaissent 
					// La succession des images du header devient donc automatique  

		var largeur_fenetre = $(window).width(); // largeur de la fenetre 
												// si la fenetre est < 500px et que l'image 1 est visible, alors elle disparait 
												// sinon elle apparait 

		if($('#responsive_1').css("opacity") == 1 && largeur_fenetre <= 700)
		{
			$('#responsive_1').animate({opacity: '0'}, 4000); 
			$('#responsive_2').animate({'opacity':'1'}, 4000);
		}
		if($('#responsive_1').css("opacity") == 0 && largeur_fenetre <= 700)
		{
			$('#responsive_1').animate({opacity: '1'}, 4000); 
			$('#responsive_2').animate({'opacity':'0'}, 4000);
		}
	};

	var interval = setInterval(bis, 10000); // la fonction setInterval permet de lancer l'animation a l'infini 
	
}); 