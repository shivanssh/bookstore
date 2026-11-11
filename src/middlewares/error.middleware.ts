/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';

const errLocalization = 'Something went wrong!';

export const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const statusCode =
    typeof err.statusCode === 'number' &&
    err.statusCode >= 400 &&
    err.statusCode < 600
      ? err.statusCode
      : 500;

  //Log only for server error
  if (statusCode >= 500) {
    console.error('Something went wrong while processing req', err);
  }

  const errCode =
    statusCode === 500 ? 'INTERNAL_SERVER_ERROR' : err?.code || 'REQUEST_ERROR';
  const errMsg =
    process.env.NODE_ENV === 'production'
      ? errLocalization
      : err?.message || errLocalization;

  return res.status(statusCode).json({
    message: false,
    error: {
      code: errCode,
      message: errMsg,
    },
  });
};
