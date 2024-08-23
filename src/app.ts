import express from 'express';
import apiRoutes from './routes/apiRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
