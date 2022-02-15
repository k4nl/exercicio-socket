const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http').createServer(app);

const productController = require('./controllers/productController');


const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET']
  }
});

const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use('/', productController);

require('./sockets/prices')(io); 

http.listen(port, () => console.log(`Example app listening on port ${port}!`))