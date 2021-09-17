<?php
$data = json_decode(file_get_contents("php://input"));
$name  =  $data->name;
$email  =   $data->email;
$tel  =   $data->tel;
$token  =   $data->token;

$to      = 'orion.gloves@gmail.com';
$subject = 'Запрос с сайта';
$message = '<p><b>Имя:</b> ' . $name. '</p><p><b>Email:<b> ' . $email. '</p><p><b>Тел:</b> ' . $tel. '</p>';
$headers = 'From: webmaster@orionsafety.ru'       . "\r\n" .
             'Reply-To: webmaster@orionsafety.ru' . "\r\n" .
             'Content-type: text/html'. "\r\n" .
             'X-Mailer: PHP/' . phpversion();

if(!$token){
 echo '<h2>Please check the captcha form.</h2>';
 exit;
}
 
$secretKey = "6Ld-EwIbAAAAABTarhBU8rNQIzA5quw5QLitaGIy";
 
// post request to server
$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
$data = array('secret' => $secretKey, 'response' => $token);
 
$options = array(
 'http' => array(
 'header'  => "Content-type: application/x-www-form-urlencoded",
 'method'  => 'POST',
 'content' => http_build_query($data)
 )
);
$context  = stream_context_create($options);
$response = file_get_contents($recaptcha_url, false, $context);
$responseKeys = json_decode($response,true);
 
if($responseKeys["success"]) {
 mail($to, $subject, $message, $headers);
    $output['success'] = true;
} else {
 $output['success'] = false;
}
echo json_encode($output);
?>