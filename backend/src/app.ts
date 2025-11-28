// Express app configuration and middleware

import cors from 'cors';
import express, { type Request, type Response } from 'express';
import morgan from 'morgan';
import { config } from './config';
import { errorHandler } from './middleware/error-handler';
import { contactRouter } from './routes/contact-routes';
import { resourceRouter } from './routes/resource-routes';

const app = express();

app.use(
  cors({
    origin: config.APP_BASE_URL,
    credentials: true,
  })
);
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.get('/healthz', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.use('/api', resourceRouter);
app.use('/api', contactRouter);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

app.use(errorHandler);

export { app };
