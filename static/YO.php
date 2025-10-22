<?php
// Database connection and user authentication should be handled here

// Simulated order data (replace with actual database query)
$orders = array(
    array("order_id" => 1, "item" => "Chicken Biryani", "quantity" => 2, "total_amount" => 20),
    array("order_id" => 2, "item" => "Vegetable Pulao", "quantity" => 1, "total_amount" => 8),
    // Add more orders as needed
);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Orders</title>
    <link rel="stylesheet" href="orders.css">
</head>
<body>
    <header>
        <h1>Your Orders</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="orders.html">Your Orders</a></li>
                <li><a href="#">Wishlists</a></li>
                <li><a href="Login.html">Login</a></li>
                <li><a href="Sign.html">Signup</a></li>
            </ul>
        </nav>
    </header>
    <div class="orders-container">
        <h2>Order History</h2>
        <table>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Total Amount</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($orders as $order) { ?>
                    <tr>
                        <td><?php echo $order['order_id']; ?></td>
                        <td><?php echo $order['item']; ?></td>
                        <td><?php echo $order['quantity']; ?></td>
                        <td><?php echo $order['total_amount']; ?></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </div>
</body>
</html>