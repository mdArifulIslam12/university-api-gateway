import { Request } from 'express';
import { fileUploadHelper } from '../../../helpers/fileUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const createStudent = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;
  const uploadFile: ICloudinaryResponse = await fileUploadHelper.uploadToCloudinary(file);
  if (uploadFile) {
    req.body.profileImage = uploadFile.secure_url;
  }
  const academicDepartmentResponse = await AuthService.get(
    `/acadeimc-department?syncId=${req.body.academicDepartment}`
  );
  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  }
  const academicFacultyResponse = await AuthService.get(
    `/academic-faculty?syncId=${req.body.academicFaculty}`
  );
  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
  }
  const academicSemesterResponse = await AuthService.get(
    `/academic-semesters?syncId=${req.body.academicSemester}`
  );
  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.student.academicSemester = academicSemesterResponse.data[0].id;
  }

  const response: IGenericResponse = await AuthService.post('/users/create-student', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const UserService = {
  createStudent
};
