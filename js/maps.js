
function initMap() { // fonction lancee au debut dans la balise body du html 
    var latlng = {lat:-41.2904369, lng:174.78006860000005}; // coordonees de la carte 

     var carte = new google.maps.Map(document.getElementById("carte"), { // proprietes de la carte 
        center: latlng,
        zoom: 15,
        //scrollwheel: false,
        //draggable:false,
        //fullscreenControl: false,
        //streetViewControl: true,
        streetViewControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

     var marqueur = new google.maps.Marker({
          map: carte,
          position: latlng,
        });

    var contenuInfoBulle =	'<img style="display:block;margin:auto;margin-top:10px;margin-bottom:20px;" src="img/logo.png" alt="logo WA" id="logo"/>' + // contenu de l'info-bulle 
    						'<div style="display:flex;"><div style="margin-left:15px;margin-right:25px;"><img src="img/infobulle.png" alt="petite fille" style="height:100px;width:120px;"/></div><div><p>3 Cable street</p><p>Wellington</p><p>New Zealand</p></div></div>'

	var infoBulle = new google.maps.InfoWindow({ // creation de l'info-bulle 
		content: contenuInfoBulle
	});

	google.maps.event.addListener(marqueur, 'click', function() { // delenchement de l'info-bulle au click sur le marqueur 
		infoBulle.open(carte, marqueur);
	});

}


