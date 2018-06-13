<?php

if (isset($_POST['send-mail'])){

  $name = $_POST['name'];
  $subject = $_POST['email'];
  $mailFrom = $_POST['subject'];
  $message = $_POST['messasge'];

  $mailTo = "hchoi92@hotmail.com";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an e-mail from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.html");

}

?>
