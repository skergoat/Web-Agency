$(function(){ 

	// rechargement des "projets" via ajax 

	var size = $('#nos_projets').height(); // hauteur de la section "projets"

	console.log(size);
		
	$('.bouton_projet').on('click', function(){ // au click sur un bouton de la nav...

		var idDiv = $(this).attr('id'); // on recupere son id
		var box = $('#container_container_projets');// variable = conteneur qui contient les "projets"

		box.fadeOut(500, function(){ // le conteneur disparait lentement avec ses projets 

			$('#nos_projets').css('height', size + 'px'); // on maintient la taille de la section "projets"
													  // pour eviter que la section du dessous remonte
													  // apres la disparition  

			var test = $('#nos_projets').height();

				console.log(idDiv + '.html');										  

			box.load(idDiv + '.html', function(){ // on charge la nouvelle page 
												  // le titre du fichier.html = l'id du bouton clique  
				box.fadeIn(function(){

					$('#nos_projets').css('height', '100%');

				}); 
			});		
		}); 
	});

}); 


