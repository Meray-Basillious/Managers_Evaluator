import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export interface ApiError extends Error {
  statusCode?: number;
  code?: string;
  details?: any;
}

export function errorHandler(
  err: ApiError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = (err as ApiError).statusCode || 500;
  const message = err.message || 'Internal Server Error';

  logger.error({
    error: {
      message,
      code: (err as ApiError).code,
      details: (err as ApiError).details,
      stack: err.stack,
    },
    request: {
      method: req.method,
      path: req.path,
      userId: (req as any).user?.id,
    },
  });

  res.status(statusCode).json({
    success: false,
    message,
    code: (err as ApiError).code || 'INTERNAL_ERROR',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
}

export class AppError extends Error implements ApiError {
  statusCode: number;
  code: string;
  details?: any;

  constructor(
    message: string,
    statusCode: number = 500,
    code: string = 'INTERNAL_ERROR',
    details?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
