// Server entry point
import { app } from './app';
import { config } from './config';

const port = config.PORT;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Resource service listening on port ${port}`);
});
