<?php
if(isset($_POST["send_email"])){
    to_send_mail($_POST["send_email"]);
}

function to_send_mail($email_adress){
error_reporting(E_ERROR);//отключение предупреждений и нотайсов(warning и notice)на сайте
// Создание переменных полей формы 
//if(isset($_POST['service'])){$service = $_POST['service']; if($service == '') {unset($service);}}
if(isset($_POST['full_name'])){$full_name = $_POST['full_name']; if($full_name == '') {unset($full_name);}}
if(isset($_POST['phone'])){$phone = $_POST['phone']; if($phone == '') {unset($phone);}}
if(isset($_POST['sub'])){$sub = $_POST['sub']; if($sub == '') {unset($sub);}}

//Стирание треугольных скобок из полей формы
if (isset($service)) {
	$service=stripslashes($service);
	$service=htmlspecialchars($service);
}
if (isset($full_name)) {
	$full_name=stripslashes($full_name);
	$full_name=htmlspecialchars($full_name);
}
if (isset($phone)) {
	$phone=stripslashes($phone);
	$phone=htmlspecialchars($phone);
}

//Тема сообщения 
	$subject = "Заказ услуги";
//Текст письма 
	$message = "<!DOCTYPE html>
<html lang='ru'>
<head>
	<meta charset='utf-8'>
	<title>maket</title>
</head>
<body>
	<h2>ФИО : <span style='color: #EFB90F'>$full_name</span></h2>
	<h2>Почта : <span style='color: #EFB90F'>$phone</span></h2>
	<h1>Сообщения <span style='color: #EFB90F'>Услуга</span></h1>
	<h1>$sub</h1>
</body>
</html>";
//Заголовок
	$headers = "Content-type: text/html; Charset=utf-8\r\n";
	$headers .= $email_adress;
if (isset($full_name) && isset($sub)) {
	if(mail($email_adress,$subject,$message,$headers)){
		echo("Отправленно")
	}

	}
}
?>
