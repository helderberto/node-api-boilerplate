const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('morgan');
const compression = require('compression');
const routes = require('./routes');

/**
 * Load environment variables from .env file.
 */
dotenv.config({ path: '.env.example' });

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configs.
 */
app.set('port', process.env.PORT || 3000);

/**
 * Express load middlewares
 */
app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(compression());
app.use(routes);

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log(
    '🏁 Server is running on http://localhost:%s on %s mode',
    app.get('port'),
    app.get('env'),
  );
  console.log('Press CTRL-C to stop\n');
});

module.exports = app;
