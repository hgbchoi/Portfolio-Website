<?php
  $name = $_POST['name'];
  $subject = $_POST['email'];
  $mailFrom = $_POST['subject'];
  $message = $_POST['message'];

  $mailTo = "hchoi92@billychoi.com";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an e-mail from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("location:index.php?mailsent");
?>
