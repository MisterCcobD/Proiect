  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  exit;
}
  $to = 'irofted@gmail.com';
  $subject = 'New form submission';
  $message = 'Name: ' . $_POST['name'] . "\r\n" .
             'Email: ' . $_POST['email'] . "\r\n" .
             'Message: ' . $_POST['message'] . "\r\n";
  $headers = 'From: ' . $_POST['email'] . "\r\n" .
             'Reply-To: ' . $_POST['email'] . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);
