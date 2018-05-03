<?
	if(isset ($_POST['title'])) {$title=$_POST['title'];}
	if(isset ($_POST['name'])) {$name=$_POST['name'];}
	if(isset ($_POST['phone'])) {$phonenum=$_POST['phone'];}
	if(isset ($_POST['email'])) {$email=$_POST['email'];}

	//$to = "mashtalir_sasha@ukr.net";
	$to = "florainkiev@gmail.com";

	$message = "Форма: $title <br><br>";
	if ( $name || $phonenum || $email ) {
		$message .= ""
			. ( $name ?" Имя:  $name <br>" : "")
			. ( $phonenum ?" Телефон:  $phonenum <br>" : "")
			. ( $email  ? " E-mail: $email <br>" : "");
	}

	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=UTF-8\r\n";
	$headers .= "From: no-reply@florain.com.ua";

	if (!$title && !$phonenum) {
	} else {
		mail($to,"New lead(lp.florain.com.ua)",$message,$headers);
	}
?>