const  express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const server = http.createServer(app);

const PORT = 5000;

app.get('/', (req, res)=>{
  res.send('Hello World:)');
})

server.listen(PORT, console.log('Server running on: ' + PORT));
