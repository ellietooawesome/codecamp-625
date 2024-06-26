const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});


app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});


app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
