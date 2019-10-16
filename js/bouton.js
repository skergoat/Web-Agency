// diaporama du header 

$(function(){ 

	// lancer la barre de chargement et le slider 
	function startInterval(){ 

		$('.chargement_barre').animate({'width':'100%'}, 10000);
		$('.chargement_barre').animate({'width':'0px'}, 0, function() {

			loadInterval();
		}); 
	};

	// animation du slider 
	function loadInterval() {

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
	}

	// lancer la premiere animation du slider en attendant le premier interval de 10000ms 
	startInterval();

	// css 
	$('#en_tete_2').animate({'opacity':'0'}, 1000);
	$('#responsive_1, #en_tete_1').addClass('start');

	// click sur les boutons 
	$('.bouton').click(function(e){ 

		e.preventDefault();
		$(this).prop('disabled', true);

		loadInterval();

		setTimeout(function() {

			$('.bouton').prop('disabled', false);

		}, 1000);

	});

	// animation en boucle 
	var interval = setInterval(startInterval, 10000); 

}); 