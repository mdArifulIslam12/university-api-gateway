import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterMonths,
  academicSemesterTitles
} from './academicSemester.constant';
const create = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is required'
    }),
    year: z.number({
      required_error: 'Year is required'
    }),
    code: z.enum([...academicSemesterCode] as [string, ...string[]], {
      required_error: 'Code is required'
    }),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'Start Month is required'
    }),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'End Month is required'
    })
  })
});
const update = z
  .object({
    body: z.object({
      title: z.enum([...academicSemesterTitles] as [string, ...string[]]).optional(),
      year: z.number().optional(),
      code: z.enum([...academicSemesterCode] as [string, ...string[]]).optional(),
      startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]]).optional(),
      endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]]).optional()
    })
  })
  .refine((data) => (data.body.title && data.body.code) || (!data.body.title && !data.body.code), {
    message: 'Either both title and code should be provider or neither'
  });

export const acaddemicSemesterValidation = {
  create,
  update
};
