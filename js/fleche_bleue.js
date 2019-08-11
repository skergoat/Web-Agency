$(function(){

	$('.fleche_bleue').hide(); // les fleches sont cachees 

	$('#liste_projets li').mouseover(function(){ // au survol des boutons, la fleche apparait 
		var id_fleche = this.id; 
		$('#fleche_bleue'+id_fleche).show();
	});

	$('#liste_projets li').mouseout(function(){ // quand le survol cesse, la fleche disparait 
		var id_fleche = this.id; 
		$('#fleche_bleue'+id_fleche).hide();
	});

}); 

