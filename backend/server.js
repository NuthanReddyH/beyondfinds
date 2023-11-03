const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('./passport');
const router = require('./routes/index');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    const allowedOrigins = ['http://localhost:3000'];
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

app.use('/api', router);

const uri = process.env.DATABASE_URL;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log('DB has connected Successfully')

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App is running at port ${port}!!!`);
});

