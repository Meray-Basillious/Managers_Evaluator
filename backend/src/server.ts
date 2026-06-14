import 'dotenv/config';
import app from './app';
import logger from './utils/logger';
import { initializeDatabase } from './config/database';

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // Initialize database
    logger.info('Initializing database connection...');
    await initializeDatabase();
    logger.info('Database connected successfully');

    // Start express server
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
      logger.info(`Environment: ${process.env.NODE_ENV}`);
      logger.info('API Documentation: http://localhost:' + PORT + '/api/docs');
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully...');
  process.exit(0);
});

startServer();
