import cors from 'cors';
import express, { Application, Request, Response } from 'express';


const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes


const getAController = (req: Request, res: Response) => {
  res.send('hello developer');
};

app.get('/', getAController);

export default app;
