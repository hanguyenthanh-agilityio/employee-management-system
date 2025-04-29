import { z } from 'zod';

export const leaveApplicationSchema = z.object({
  leaveType: z.string().min(1, 'Leave type is required'),
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Start date must be in yyyy-mm-dd format'),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'End date must be in yyyy-mm-dd format'),
  duration: z.coerce.number().min(1, 'Duration must be at least 1'),
  resumptionDate: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      'Resumption date must be in yyyy-mm-dd format',
    ),
  reason: z.string().min(1, 'Reason is required'),
});
