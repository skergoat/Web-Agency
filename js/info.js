$(function(){

	// script qui fait apparaitre les infos au survol des "projets"

	$('h4').hide(); // les infos sont cachees et positionnees sous chacune des images 

	$('.div_transparente').mouseover(function(){ // au hover, la taille de la div augmente de 170px et sa position top dimimnue d'autant
												 // ce qui donne l'illusion qu'elle remonte

		var id_projet = this.id; 
		$('#titre_projet_' + id_projet).animate({'height':'+=150px', 'top':'-=150px'}, 300);
	});

	$('.div_transparente').mouseout(function(){// lorsque la souris cesse de survoler la div, la taille de la div diminue de 170px et sa position top augmente d'autant
											   // ce qui donne l'illusion qu'elle redescend

		var id_projet = this.id; 
		$('#titre_projet_' + id_projet).animate({'height':'150px', 'top':'+=150px'}, 200);
	});

});
			