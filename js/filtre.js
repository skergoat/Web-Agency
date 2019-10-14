$(function(){ 

	/* si click sur le filtre, il disparait */
	$('#filtre_map').click(function(){

		$('.filtre_bleu').removeClass('bleu');
		$('.filtre_bleu').addClass('pasBleu');
		
	}); 

	/* si scroll au-dela 1500px alors le filtre revient*/
	
	$(document).on("scroll", function(){

		var st = $(this).scrollTop();
 
		if(st < 1500){

			$('.filtre_bleu').removeClass('pasBleu');
			$('.filtre_bleu').addClass('bleu');
		} 
	    
	}); 

	$(window).resize(function(){

		var filtreBleu = $('.filtre_bleu') ; 

		if(!filtreBleu.hasClass('bleu')){

			$('.filtre_bleu').removeClass('pasBleu');
			$('.filtre_bleu').addClass('bleu');
		}

	}); 

});