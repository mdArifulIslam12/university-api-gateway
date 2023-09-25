import { Request } from 'express';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const updateIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await AuthService.patch(`/faculty/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const FacultyService = {
  updateIntoDB
};
