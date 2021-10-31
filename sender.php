<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['text'];

	$to = "denis.kosssa@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Почта: $email /n
    Текст: $text"; 	
	mail($to, $subject, $msg, "From: $to ");

?>

<p>Привет, форма отправлена</p>
