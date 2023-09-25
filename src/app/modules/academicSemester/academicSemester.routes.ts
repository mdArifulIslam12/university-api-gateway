import { Router } from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { acaddemicSemesterValidation } from './academicSemester.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = Router();
router.get('/', AcademicSemesterController.getAllFromDb);
router.get('/:id', AcademicSemesterController.getSingleFromDb);
router.post(
  '/',
  validateRequest(acaddemicSemesterValidation.create),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicSemesterController.insertToDB
);

router.patch(
  '/:id',
  validateRequest(acaddemicSemesterValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicSemesterController.updateOneIntoDb
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicSemesterController.deleteOneIntoDb
);

export const academicSemesterRoutes = router;
