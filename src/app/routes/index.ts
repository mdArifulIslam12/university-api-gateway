import express from 'express';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { userRoutes } from '../modules/user/user.routes';
import { authRoutes } from '../modules/auth/auth.routes';
import { facultyRoutes } from '../modules/faculty/faculty.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: academicSemesterRoutes
  },
  {
    path: '/users',
    routes: userRoutes
  },
  {
    path: '/auth',
    routes: authRoutes
  },
  {
    path: '/faculties',
    routes: facultyRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
