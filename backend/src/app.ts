import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import 'express-async-errors';
import httpLogger from 'pino-http';
import logger from './utils/logger';
import { errorHandler } from './middleware/errorHandler';
import { authMiddleware } from './middleware/auth';

// Route imports (will be created)
import authRoutes from './routes/auth';
import assessmentRoutes from './routes/assessments';
import answerRoutes from './routes/answers';
import dashboardRoutes from './routes/dashboard';
import reportRoutes from './routes/reports';
import adminRoutes from './routes/admin';

const app: Express = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '3600000'),
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '1000'),
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/api/', limiter);

// Logging
app.use(httpLogger({
  logger,
  customLogLevel: (req: Request, res: Response, err?: Error) => {
    if (res.statusCode >= 500) return 'error';
    if (res.statusCode >= 400) return 'warn';
    return 'info';
  },
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/assessments', authMiddleware, assessmentRoutes);
app.use('/api/answers', authMiddleware, answerRoutes);
app.use('/api/dashboard', authMiddleware, dashboardRoutes);
app.use('/api/reports', authMiddleware, reportRoutes);
app.use('/api/admin', authMiddleware, adminRoutes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    path: req.path,
  });
});

// Global error handler (must be last)
app.use(errorHandler);

export default app;
