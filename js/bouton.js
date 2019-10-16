// diaporama du header 

$(function(){ 

	// 2nd image du diaporama que l'on cache au chargement de la page 
	$('#en_tete_2').animate({'opacity':'0'}, 1000);
	// ajouter la classe "start" qui servira a alterner les 2 images du diaporama 
	$('#responsive_1, #en_tete_1').addClass('start');

	// lancez la barre de chargement 
	$('.chargement_barre').animate({'width':'100%'}, 10000);
	$('.chargement_barre').animate({'width':'0px'}, 0); 

	
	function startInterval(){ // fonction qui fait defilement le diaporama et grandir la barre de chargement 

		$('.chargement_barre').animate({'width':'100%'}, 10000);
		$('.chargement_barre').animate({'width':'0px'}, 0); 

		if($('#responsive_1, #en_tete_1').hasClass('start')) {

			$('#responsive_1, #en_tete_1').animate({opacity: '0'}, 1000); 
			$('#responsive_2, #en_tete_2').animate({'opacity':'1'}, 1000);
		}
		else {

			$('#responsive_1, #en_tete_1').animate({opacity: '1'}, 1000); 
			$('#responsive_2, #en_tete_2').animate({'opacity':'0'}, 1000);
		}

		$('#responsive_1, #en_tete_1').toggleClass('start');
		$('#responsive_2, #en_tete_2').toggleClass('start');

		return false;

	};

	// alternance des inages du diaporama au click 
	$('.bouton').click(function(e){ 

		e.preventDefault();
		$(this).prop('disabled', true);

		startInterval();

		setTimeout(function() {

			$('.bouton').prop('disabled', false);

		}, 1000);

	});

	var interval = setInterval(startInterval, 10000); // la fonction setInterval permet de lancer l'animation a l'infini

}); 