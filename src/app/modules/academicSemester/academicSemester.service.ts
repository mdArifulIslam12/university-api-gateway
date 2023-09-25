import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const insertIntoDb = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post('/academic-semesters', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getAllFromDb = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/academic-semesters', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getSingleFromDb = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(`/academic-semesters/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const updateOneIntoDb = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.patch(
    `/academic-semesters/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const deleteOneIntoDb = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.delete(
    `/academic-semesters/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const AcademicSemesterService = {
  insertIntoDb,
  getAllFromDb,
  getSingleFromDb,
  updateOneIntoDb,
  deleteOneIntoDb
};
