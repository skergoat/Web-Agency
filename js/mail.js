$(function() {
    // recuperer le formulaire 
    var form = $('#ajax-contact');

    // Recuperer le message de la div
    var formMessages = $('#form-messages');

    $(':input').focus(function(){

    	formMessages.html('');
    }); 

    // Creer un EventListener pour le formulaire de contact 
	$(form).submit(function(event) {
	    // Annuler l'envoi du formulaire 
	    event.preventDefault();

	    // adapter le contenu a ajax 
		var formData = $(form).serialize();

	    // soumettre le formulaire a ajax 
		$.ajax({
		    type: 'POST',
		    url: $(form).attr('action'),
		    data: formData
		})

		.done(function(response) {
		    // s'assurer que la div du message a la classe "success"
		    $(formMessages).removeClass('error');
		    $(formMessages).addClass('success');

		    // Changer le texte du message 
		     $(formMessages).text('Message envoyé');

		    // Vider le formulaire 
		    $('#name').val('');
		    $('#email').val('');
		    $('#subject').val('');
		    $('#message').val('');
		})

		.fail(function(data) {
		    // s'assurer que la div du message a la classe "error"
		    $(formMessages).removeClass('success');
		    $(formMessages).addClass('error');

		    // Changer le texte du message 
		    if (data.responseText !== '') {
		        $(formMessages).text(data.responseText);
		    } else {
		        $(formMessages).text('Oops! Il semblerait que le serveur ne marche pas !');
		    }
		});

	});

});