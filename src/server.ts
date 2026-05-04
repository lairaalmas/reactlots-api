import { buildApp } from './app.js';

const app = buildApp();

app.listen({ port: 3333, host: '0.0.0.0' })
  .then(() => console.log('API running on http://localhost:3333'))
  .catch((err) => {
    app.log.error(err);
    process.exit(1);
  });