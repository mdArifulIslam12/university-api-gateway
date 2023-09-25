import { Router } from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthZodValidation } from './auth.vaildation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = Router();

router.post('/login', validateRequest(AuthZodValidation.loginUser), AuthController.loginUser);
router.post(
  '/refresh-token',
  validateRequest(AuthZodValidation.refreshTokenZodSchema),
  AuthController.refreshToken
);
router.post(
  '/change-password',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY,
    ENUM_USER_ROLE.STUDENT
  ),
  validateRequest(AuthZodValidation.changePasswordZodSchema),
  AuthController.changePassword
);

export const authRoutes = router;
