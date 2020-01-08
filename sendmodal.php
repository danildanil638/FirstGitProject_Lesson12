<?php
$username = $_POST['userName'];
$useremail = $_POST['userEmail'];
$userphone = $_POST['userPhone'];

// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->CharSet = "utf-8";

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'danilyatsenko638@gmail.com';                     // SMTP username
    $mail->Password   = 'kanapla15';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('danilyatsenko638@gmail.com', 'Данил');
    $mail->addAddress('danil.yacenko.1997@mail.ru');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${username}, его(её) телефон: ${userphone}, Его почта(её): ${useremail}";
                    
    if ($mail->send()) {
        echo "ок";
    } else {
        echo "Message could not be sent. Код ошибки: {$mail->ErrorInfo}";
    }
    
} catch (Exception $e) {
    echo "Message could not be sent. Код ошибки: {$mail->ErrorInfo}";
}

