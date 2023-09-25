import { NextFunction, Request, Response } from 'express';
import { FacultyService } from './faculty.service';
import sendResponse from '../../../shared/response';

const updateIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.updateIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const FacultyController = {
  updateIntoDB
};
