const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('./passport');
const router = require('./routes/index');
const cors = require('cors');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');
const socketServer = require('./socketServer'); // Import the Socket.io event handling logic
const { Product, Subcategory, Category } = require('./models/Products');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000','https://beyondfinds.onrender.com/'],
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    const allowedOrigins = ['http://localhost:3000','https://beyondfinds.onrender.com'];
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  optionSuccessStatus: 200
}));

app.use(bodyParser.json());
app.use(passport.initialize());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api', router);

// Connect to MongoDB
const uri = process.env.DATABASE_URL;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log('DB has connected Successfully');

// Initialize Socket.io event handling
socketServer(io); // Pass the io instance to the socketServer

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`App is running at port ${port}!!!`);
});




