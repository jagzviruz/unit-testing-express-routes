import express from 'express';

import router from './api';

const app = express();

app.use('/users', router);

const bootUpServer = () => {
  app.listen({
    port: 3000,
  }, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Server ready at http://localhost:3000`);
  });
};

setImmediate(bootUpServer);

// Shutdown API server gracefully
const handleExit = (options, err) => {
  if (err) console.error(err);
  if (options.exit) process.exit();
};

process.on('exit', handleExit.bind(null, {
  exit: true
}));
process.on('SIGINT', () => {
  handleExit.bind(null, {
    exit: true,
    message: 'Recieved "SIGINT"',
  });
});

process.on('SIGTERM', handleExit.bind(null, {
  exit: true,
  message: 'Recieved "SIGTERM"',
}));
process.on('uncaughtException', handleExit.bind(null, {
  exit: true,
  message: 'Recieved "uncaughtException"',
}));

export default app;
