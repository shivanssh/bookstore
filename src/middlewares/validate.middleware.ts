import { ZodType } from 'zod';
import { $ZodIssue } from 'zod/v4/core';
import { RequestHandler } from 'express';

const mapOverErrFields = (issues: $ZodIssue[]) =>
  issues.map((issue) => ({
    field: issue.path.join('.'),
    message: issue.message,
  }));

export const validateBody = (schema: ZodType): RequestHandler => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Request body validation failed',
          details: mapOverErrFields(result.error.issues),
        },
      });

      return;
    }

    req.body = result.data;
    next();
  };
};

export const validateParams = (schema: ZodType): RequestHandler => {
  return (req, res, next) => {
    const result = schema.safeParse(req.params);

    if (!result.success) {
      res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Request params validation failed',
          details: mapOverErrFields(result.error.issues),
        },
      });

      return;
    }

    next();
  };
};
