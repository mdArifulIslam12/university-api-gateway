import { z } from 'zod';
import { studentBloodGroup, studentGender } from './user.constant';

const createStudent = z.object({
  password: z.string().optional(),
  name: z
    .object({
      firstName: z.string().optional(),
      middleName: z.string().optional(),
      lastName: z.string().optional()
    })
    .optional(),
  dateOfBirth: z.string().optional(),
  gender: z.enum([...studentGender] as [string, ...string[]]).optional(),
  bloodGroup: z.enum([...studentBloodGroup] as [string, ...string[]]).optional(),
  email: z.string().email().optional(),
  contactNo: z.string().optional(),
  emergencyContactNo: z.string().optional(),
  presentAddress: z.string().optional(),
  permanentAddress: z.string().optional(),
  guardian: z
    .object({
      fatherName: z.string().optional(),
      fatherOccupation: z.string().optional(),
      fatherContactNo: z.string().optional(),
      motherName: z.string().optional(),
      motherOccupation: z.string().optional(),
      motherContactNo: z.string().optional(),
      address: z.string().optional()
    })
    .optional(),
  localGuardian: z
    .object({
      name: z.string().optional(),
      occupation: z.string().optional(),
      contactNo: z.string().optional(),
      address: z.string().optional()
    })
    .optional(),
  profileImage: z.string().optional(),
  academicFaculty: z.string().optional(),
  academicDepartment: z.string().optional(),
  academicSemester: z.string().optional()
});
const updateStudent = z.object({
  name: z
    .object({
      firstName: z.string().optional(),
      middleName: z.string().optional(),
      lastName: z.string().optional()
    })
    .optional(),
  dateOfBirth: z.string().optional(),
  gender: z.enum([...studentGender] as [string, ...string[]]).optional(),
  bloodGroup: z.enum([...studentBloodGroup] as [string, ...string[]]).optional(),
  email: z.string().email().optional(),
  contactNo: z.string().optional(),
  emergencyContactNo: z.string().optional(),
  presentAddress: z.string().optional(),
  permanentAddress: z.string().optional(),
  guardian: z
    .object({
      fatherName: z.string().optional(),
      fatherOccupation: z.string().optional(),
      fatherContactNo: z.string().optional(),
      motherName: z.string().optional(),
      motherOccupation: z.string().optional(),
      motherContactNo: z.string().optional(),
      address: z.string().optional()
    })
    .optional(),
  localGuardian: z
    .object({
      name: z.string().optional(),
      occupation: z.string().optional(),
      contactNo: z.string().optional(),
      address: z.string().optional()
    })
    .optional(),
  profileImage: z.string().optional(),
  academicFaculty: z.string().optional(),
  academicDepartment: z.string().optional(),
  academicSemester: z.string().optional()
});

export const UserValidation = { createStudent, updateStudent };