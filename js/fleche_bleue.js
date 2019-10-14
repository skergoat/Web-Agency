$(function(){

	// active 

	// border-top 

	$('#liste_projets li:nth-child(1)').addClass('active_projet');

	$('#liste_projets li').mouseover(function() {

		if(!$(this).hasClass('active_projet')) {

			$('#liste_projets li').not(this).removeClass('active_projet');
			$(this).addClass('active_projet');
		}
	});

	// blue arrow 

	// $('.fleche_bleue').show(); // les fleches sont cachees 
	$('.fleche_bleue').not('#fleche_bleue1').hide();

	$('#liste_projets li').mouseover(function(){ // au survol des boutons, la fleche apparait 

		var id_fleche = this.id; 
		$('#fleche_bleue'+id_fleche).show();
		$('.fleche_bleue').not('#fleche_bleue'+ this.id).hide();

	});

	// $('#liste_projets li').mouseout(function(){ // quand le survol cesse, la fleche disparait 
	// 	var id_fleche = this.id; 
	// 	$('#fleche_bleue'+id_fleche).hide();
	// });

}); 

