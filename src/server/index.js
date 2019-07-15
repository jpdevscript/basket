const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/apiRoutes');

const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin');
  res.header('Access-Control-Allow-Origin', '*');
  next();
}

app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.use('/api', apiRoutes);
app.use(router);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`🚀 Server ready at http://localhost:${port}`));