const express = require('express');
const mysql = require('mysql');

const app = express();

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mysql'
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// Create a simple route
app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Node.js App</title>
  </head>
  <body>
      <h1>Hello from Node.js!</h1>
      <p>Yay App works!</p>
      <p>your node server with mysql works on nginx</p>
  </body>
  </html>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});