<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process login form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // TODO: Retrieve user data from the database and verify credentials
    // Example using MySQLi:
    $mysqli = new mysqli('localhost', 'username', 'password', 'your_database');

    if ($mysqli->connect_error) {
        die('Connection error: ' . $mysqli->connect_error);
    }

    $sql = "SELECT id, username, password FROM users WHERE username = ?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $row = $result->fetch_assoc();

        if (password_verify($password, $row['password'])) {
            $_SESSION['user_id'] = $row['id'];
            header('Location: dashboard.php'); // Redirect to dashboard or another page
            exit;
        } else {
            echo "Invalid username or password.";
        }
    } else {
        echo "User not found.";
    }

    $stmt->close();
    $mysqli->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Login</title>
</head>
<body>
    <h1>Login</h1>
    <form method="POST" action="login.php">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        
        <button type="submit">Login</button>
    </form>
</body>
</html>