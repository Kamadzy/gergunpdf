<?php

//Import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;

$msg = '';
if (array_key_exists('file', $_FILES)) {
    // First handle the upload
    // Don't trust provided filename - same goes for MIME types
    // See http://php.net/manual/en/features.file-upload.php#114004 for more thorough upload validation
    $upload_file = tempnam(sys_get_temp_dir(), hash('sha256', $_FILES['file']['name']));

    if (move_uploaded_file($_FILES['file']['tmp_name'], $upload_file)) {
        // Upload handled successfully
        // Now create a message
        require 'vendor/autoload.php';
        $mail = new PHPMailer;
        $mail->setFrom('no-reply@gerguntransportation.com', 'Gergun Transportation Inc.');
        $mail->addAddress('gerguntrans@gmail.com');
        $mail->Subject = 'New driver application';
        $mail->Body = "You're beautiful ;)";
        // Attach the uploaded file
        $mail->addAttachment($upload_file, 'Driver_application.pdf');
        if (!$mail->send()) {
            $msg .= "Mailer Error: " . $mail->ErrorInfo;
        } else {
            $msg .= "Message sent!";
        }
    } else {
        $msg .= 'Failed to move file to ' . $upload_file;
    }

    echo $msg;
}
