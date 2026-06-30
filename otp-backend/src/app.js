import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env.js';
import { globalRateLimit } from './middleware/rateLimit.middleware.js';
import { errorHandler, notFound } from './middleware/errorHandler.middleware.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: env.frontendUrl, credentials: true }));
app.use(express.json());
app.use(globalRateLimit);

app.use('/api/auth', authRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;