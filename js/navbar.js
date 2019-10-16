$(function(){

	// border-top de la navbar  

	$('#liste1 li a:first').addClass('active');

	$('#liste1 li a').mouseover(function() {

		if(!$(this).hasClass('active')) {

			$('li a').not(this).removeClass('active');
			$(this).addClass('active');

		}
	});

	// box-shadow au chargement de la page 
	var offset = $("nav").offset().top; 

	if(offset > 1){ 

        $("nav").css('border-bottom', '1px solid grey').css('box-shadow', '0px 0px 8px 2px grey');
        $("nav").addClass('navbar_animation');
    }
    else {

    	$("nav").css('border-bottom', '1px solid transparent').css('box-shadow', '0px 0px 8px 2px transparent');
    	$("nav").removeClass('navbar_animation');
    }

    // animation et box-shadow de la navbar au scroll 
	$(document).on('scroll', function(){ 

	   	var scroll = $(this).scrollTop();

		if(scroll > 10) {

			$("nav").addClass('navbar_animation').css('border-bottom', '1px solid grey').css('box-shadow', '0px 0px 8px 2px grey');

		}
		else if(scroll >= 0 && scroll <= 10) {

			$("nav").removeClass('navbar_animation').css('border-bottom', '1px solid transparent').css('box-shadow', '0px 0px 8px 2px transparent');
		}

		if($('#icon1').hasClass('open')) { 

	   		$('#nav_responsive').animate({'top':'-=275px'});
			$('#container_nav_responsive').animate({'height':'-=320px'});
			$('#icon1').toggleClass();
	   	}
	   
	}); 

	// fermeture du menu deroulant au scroll 
	$(window).resize(function() {

		if($('#icon1').hasClass('open')){ 

			$('#icon1').toggleClass('open');
			$('#nav_responsive').animate({'top':'-=275px'}, 500);
			$('#container_nav_responsive').animate({'height':'-=320px'}, 500);
		}

	});

	
	// ouverture et fermeture de la nav responsive 

	$('#icon1').click(function(){ // si on clique sur le hamburger 

		if(!$(this).hasClass('open')){ // si la navbar est fermee  

				$('#nav_responsive').animate({'top': '+=275px'}, 500);
				$('#container_nav_responsive').animate({'height':'+=320px'}, 500);
			
			$(this).toggleClass('open'); // on change la classe du "hanburger" pour pouvoir refermer la liste des items  
		}
		else{ // si la navbar est ouverte 

				$('#nav_responsive').animate({'top':'-=275px'}, 500);
				$('#container_nav_responsive').animate({'height':'-=320px'}, 500);

			$(this).toggleClass(); // et on change la classe du "hamburger" pour pouvoir reouvrir les items 
		}
	
	});

}); 