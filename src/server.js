import './config/dotenv.config';
import app from './app';

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log(
    '🏁 Server is running on http://localhost:%s on %s mode',
    app.get('port'),
    app.get('env')
  );
  console.log('Press CTRL-C to stop\n');
});
