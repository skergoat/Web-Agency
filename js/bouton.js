$(function(){ // script qui declenche l'apparition des boutons et l'animation du slider 

	// le bouton 

	// $('.bouton').css('background-color', 'black').css('color', 'white').css('opacity', '0'); // le bouton est invisible 

	// $('.bouton').mouseover(function(){ // au :hover il apparait 

	// 	$('.bouton').animate({'opacity':'0.7'}, 1200);
	// }); 

	// $('.bouton').mouseout(function(){ // a la fin du survol il disparait 

	// 	$('.bouton').animate({'opacity':'0'}, 1000);
	// }); 

	// le slider 

	$('.bouton').click(function(){ // au click, si l'image 1 est visible, elle disparait. Autrement elle apparait

		if($('#en_tete_1').css('opacity') == "1"){

			$('#en_tete_1').animate({'opacity':'0'}, 1000);
		}
		else{
			$('#en_tete_1').animate({'opacity':'1'}, 1000);
		}
	});

	function bis(){	// en-dessous de 500px les boutons disparaissent 
					// La succession des images du header devient donc automatique  

		var largeur_fenetre = $(window).width(); // largeur de la fenetre 
												// si la fenetre est < 500px et que l'image 1 est visible, alors elle disparait 
												// sinon elle apparait 

		if($('#en_tete_1').css("opacity") == 1 && largeur_fenetre <= 500)
		{
			$('#en_tete_1').animate({opacity: '0'}, 4000); 
		}
		if($('#en_tete_1').css("opacity") == 0 && largeur_fenetre <= 500)
		{
			$('#en_tete_1').animate({opacity: '1'}, 4000); 
		}
	};

	var interval = setInterval(bis, 10000); // la fonction setInterval permet de lancer l'animation a l'infini 
	
}); 