$(function(){

	$('a[href^="#"]').click(function(){ //au clique sur un lien vers une ancre...

		var the_id = $(this).attr("href"); // on recupere le href du lien, cad l'id de l'ancre 
		var size = $('#nav_bis').height(); // on recupere la hauteur de la nav reponsive (< 950px)

		if (the_id === '#') { // s'il n'y a pas de href, il ne se passe rien
			return;
		}

		if($('#icon1').hasClass('open')){ //si la navbar liste des items est ouverte, on la referme 

			$('#nav_responsive').animate({'top':'-=275px'}, 500);
			$('#container_nav_responsive').animate({'height':'-=320px'}, 500);
			$('#icon1').toggleClass();
		}

		$('html, body').animate({ // on rejoint en vitesse "slow" la position de l'ancre 
			scrollTop:(($(the_id).offset().top) - (size + 30)) 	//a laquelle on retranche la hauteur de la navbar 
		}, 'slow');
		
		return false; 
	});
	
});