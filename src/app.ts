import express, { Application, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorhandler';

const app: Application = express();

// Body parsers
app.use(express.json());
app.use(cookieParser());

// CORS setup
app.use(cors({ origin: 'http://localhost:5173' }));

// Application routes
app.use('/api', router);

// Example controller and route
const getAController = (req: Request, res: Response) => {
  res.send('Welcome to car washing');
};
app.get('/', getAController);

// Global error handler
app.use(globalErrorHandler);

// Not found handler
app.use(notFound);

export default app;
