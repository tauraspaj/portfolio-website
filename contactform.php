<?php 

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$mailFrom = $_POST['mail'];
	$message = $_POST['message'];

	$mailTo = "tp00436@surrey.ac.uk";
	$headers = "From: ".$mailFrom;
	$txt = "You have received an email from ".$name."\n\n".$message;

	mail($mailTo, $suject, $txt, $headers);
	header("Location: contact.html");
}

?>