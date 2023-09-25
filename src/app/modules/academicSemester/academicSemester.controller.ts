import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/response';

const insertToDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.insertIntoDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAllFromDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getSingleFromDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateOneIntoDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.updateOneIntoDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteOneIntoDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.deleteOneIntoDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  insertToDB,
  getAllFromDb,
  getSingleFromDb,
  updateOneIntoDb,
  deleteOneIntoDb
};
