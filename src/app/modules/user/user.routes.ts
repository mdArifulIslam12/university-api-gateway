import { Router, Request, Response, NextFunction } from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { fileUploadHelper } from '../../../helpers/fileUploadHelper';
import { UserValidation } from './user.vaildation';

const router = Router();

router.post(
  '/create-student',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  fileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createStudent.parse(JSON.parse(req.body.data));
    return UserController.createStudent(req, res, next);
  }
);

export const userRoutes = router;
