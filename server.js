const  express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 5000;

app.get('/', (req, res)=>{
  res.send('Hello World:)');
})

app.listen(PORT, console.log('Server running on: ' + PORT));
