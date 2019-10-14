$(function(){

	// border-top 

	$('#liste1 li a:first').addClass('active');

	$('#liste1 li a').mouseover(function() {

		if(!$(this).hasClass('active')) {

			$('li a').not(this).removeClass('active');
			$(this).addClass('active');

		}
	});

	// navbar fixed

	var offset = $("nav").offset().top; // position top de la navbar 

	$(document).scroll(function(){ // au scroll... 

	    var scrollTop = $(document).scrollTop(); // variable qui contient la position du scroll  
	    if(scrollTop > offset + 100){ // si le scroll est au-dessus de la position de la navbar + 100px
	        $("nav").attr('class', 'navbar_animation').css('border-bottom', '1px solid grey').css('box-shadow', '0px 0px 8px 2px grey');
	    }

	    else{

	    	 $("nav").removeClass('navbar_animation'); //autrement la navbar reste a sa place 
	    }

	    if($('#icon1').hasClass('open')){ // si la navbar est ouverte au scroll, alors elle se referme 

	   		$('#nav_responsive').animate({'top':'-=275px'});
			$('#container_nav_responsive').animate({'height':'-=320px'});
			$('#icon1').toggleClass();

	   	}

	});

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