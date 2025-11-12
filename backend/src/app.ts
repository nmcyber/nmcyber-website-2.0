import express, { type Request, type Response } from 'express';
import morgan from 'morgan';
import { errorHandler } from './middleware/error-handler';
import { resourceRouter } from './routes/resource-routes';

const app = express();

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.get('/healthz', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.use('/api', resourceRouter);

app.use(errorHandler);

export { app };
