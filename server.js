// variables used to initialize express
const express = require('express');
const app = express();

// creating static port and hostname variables to start the server
const port = process.env.PORT || 8080;
const hostname = 'Localhost';


// HTML ROUTES
app.get('/', (req, res) => {
  res.send('Hi There!');
});
app.get('/bye', (req, res) =>  {
  res.send('Goodbye!');
});
app.get('/dog', (req,res) => {
  res.send('MEOW!');
});


// tell express  to listen for requests (Start Server)
app.listen(port, hostname, () => { console.log('server has started') });