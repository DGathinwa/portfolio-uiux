<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = strip_tags(trim($_POST["name"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $message = trim($_POST["message"]);

  if (!empty($name) && !empty($email) && !empty($message)) {
    $to = "your-email@example.com"; // Change this to your email
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    mail($to, $subject, $body, $headers);
    echo "Success";
  } else {
    echo "Please fill out all fields.";
  }
} else {
  http_response_code(403);
  echo "Something went wrong.";
}
?>
