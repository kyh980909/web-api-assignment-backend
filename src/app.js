import cors from 'cors';
import express from 'express';
import api from './routes';
import logger from 'morgan';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', api);

export default app;
