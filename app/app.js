const express = require('express')
const helmet = require('helmet');
const bodyParser = require('body-parser');

const test = require('./routes/test');
const hello = require('./routes/hello');

const app = express();
app.use(helmet());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log('=====================\nIncoming message: ', new Date())
  console.log(req.url)
  console.log('=========================')
  next();
})

const router = express.Router();

router.use('/test', test)
router.use('/hello', hello)

app.use('/api', router);

module.exports = app;
