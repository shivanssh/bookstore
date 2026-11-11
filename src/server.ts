import { createServer } from 'node:http';

import app from '#/app.js';
import { env } from '#/config/env.config.js';

const server = createServer(app);

server.listen(env.PORT, () => {
  console.info(
    `Server is running on port: ${env.PORT} with mode: ${env.NODE_ENV}`,
  );
});

//Shutdown
const shutdown = (signal: string): void => {
  console.info(`Signal: ${signal}`);

  server.closeIdleConnections();

  const forceShutdown = setTimeout(() => {
    console.error('Force-full shutdown');
    server.closeAllConnections();
    process.exit(1);
  }, 10_000);

  forceShutdown.unref();

  server.close((error) => {
    clearTimeout(forceShutdown);

    if (error) {
      console.error(`Error while shutdown, ${error}`);
      process.exit(1);
    }

    process.exit(0);
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
