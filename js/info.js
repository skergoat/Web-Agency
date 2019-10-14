$(function(){

	var width = $(window).width();

	if(width > 768) {

		// script qui fait apparaitre les infos au survol des "projets"

		// $('h4').hide(); // les infos sont cachees et positionnees sous chacune des images 

		$('.div_transparente').on('mouseover', function(){ // au hover, la taille de la div augmente de 170px et sa position top dimimnue d'autant
													 // ce qui donne l'illusion qu'elle remonte

			var id_projet = this.id; 
			$('#titre_projet_' + id_projet).css({'transition':'0.2s', 'top':'-150px'});
		});

		$('.div_transparente').on('mouseout', function(){// lorsque la souris cesse de survoler la div, la taille de la div diminue de 170px et sa position top augmente d'autant
												   // ce qui donne l'illusion qu'elle redescend

			var id_projet = this.id; 
			$('#titre_projet_' + id_projet).css({'transition':'0.3s', 'top':'0px'},);
		});

	} 
	else {

		$('.titre_projet').css({'top':'-150px'});

		$('.div_transparente').off();
		$('.titre_projet').off();

	}

	$(window).resize(function() {

		var width = $(window).width();

		if(width > 768) {

			$('.titre_projet').css({'top':'0px'});

			// script qui fait apparaitre les infos au survol des "projets"

			// $('h4').hide(); // les infos sont cachees et positionnees sous chacune des images 

			$('.div_transparente').on('mouseover', function(){ // au hover, la taille de la div augmente de 170px et sa position top dimimnue d'autant
														 // ce qui donne l'illusion qu'elle remonte

				var id_projet = this.id; 
				$('#titre_projet_' + id_projet).css({'transition':'0.2s', 'top':'-150px'});
			});

			$('.div_transparente').on('mouseout', function(){// lorsque la souris cesse de survoler la div, la taille de la div diminue de 170px et sa position top augmente d'autant
													   // ce qui donne l'illusion qu'elle redescend

				var id_projet = this.id; 
				$('#titre_projet_' + id_projet).css({'transition':'0.3s', 'top':'0px'},);
			});

		} 
		else {

			$('.titre_projet').css({'top':'-150px'});

			$('.div_transparente').off();
			$('.titre_projet').off();

		}

	});


});
			