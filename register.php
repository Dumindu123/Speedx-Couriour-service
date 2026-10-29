<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include "db_connect.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo "not_post";
    exit;
}

$name     = trim($_POST["name"] ?? "");
$email    = trim($_POST["email"] ?? "");
$phone    = trim($_POST["phone"] ?? "");
$password = $_POST["password"] ?? "";
$confirm  = $_POST["confirm"] ?? "";

if ($name === "" || $email === "" || $phone === "" || $password === "" || $confirm === "") {
    echo "missing_fields";
    exit;
}

if ($password !== $confirm) {
    echo "password_mismatch";
    exit;
}

$check = $conn->prepare("SELECT id FROM users WHERE email=?");
$check->bind_param("s", $email);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
    echo "email_exists";
    exit;
}

$hashed = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO users (full_name, email, phone, password) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $phone, $hashed);

if ($stmt->execute()) {
    echo "success";
} else {
    echo "insert_error";
}