<?php

if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['subject']) && !empty($_POST['message'])) {

  if(preg_match('#[a-z0-9._-]{1,10}@[a-z0-9._-]{1,10}\.[a-z]{1,3}#isU' , $_POST['email'])) {

        $mail = 'kergoane@gmail.com'; 

        $content = '<h2>' . $_POST['name'] . ' a écrit : </h2><p style="font-size:15px;font-weight:700;">' . $_POST['message'] . '</p><h3> Son mail : ' . $_POST['email'] . '</h3>';

        $sujet = $_POST['subject'];

		$passage_ligne = "\r\n";

		$message_txt = $content; 
		$message_html = '<!DOCTYPE html><html><head></head><body>' . $content . '</body></html>'; 

		$boundary = "-----=".md5(rand());
		$boundary_alt = "-----=".md5(rand());

		$header = "From: \"skergoat.com\"<no-reply@skergoat.com>".$passage_ligne;
		$header.= "Reply-to: \"skergoat.com\" <no-reply@skergoat.com>".$passage_ligne;
		$header.= "MIME-Version: 1.0".$passage_ligne;
		$header.= "Content-Type: multipart/mixed;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;

		$message = $passage_ligne."--".$boundary.$passage_ligne;
		$message.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary_alt\"".$passage_ligne;
		$message.= $passage_ligne."--".$boundary_alt.$passage_ligne;

		$message.= "Content-Type: text/plain; charset=\"ISO-8859-1\"".$passage_ligne;
		$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
		$message.= $passage_ligne.$message_txt.$passage_ligne;
		 
		$message.= $passage_ligne."--".$boundary_alt.$passage_ligne;
		 
		$message.= "Content-Type: text/html; charset=\"ISO-8859-1\"".$passage_ligne;
		$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
		$message.= $passage_ligne.$message_html.$passage_ligne;

		$message.= $passage_ligne."--".$boundary_alt."--".$passage_ligne;
		 
		$message.= $passage_ligne."--".$boundary.$passage_ligne;

		mail($mail,$sujet,$message,$header);

		return true;

	}

}