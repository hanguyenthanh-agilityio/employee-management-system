'use server';

import {
  getLeaveApplications,
  postLeaveApplication,
} from '@/services/apiService';
import { LeaveApplication } from '@/types/components';
import { leaveApplicationSchema } from '@/utils/schemas/leaveApplicationSchema';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const fetchLeaveApplications = async () => {
  const token = (await cookies()).get('token')?.value;
  if (!token) throw new Error('Token not found');

  const data: LeaveApplication = await getLeaveApplications(token);
  return data;
};

// Create Leave Application
export const createLeaveApplication = async (formDataInput: FormData) => {
  const rawData = {
    leaveType: formDataInput.get('leaveType')?.toString(),
    startDate: formDataInput.get('startDate')?.toString(),
    endDate: formDataInput.get('endDate')?.toString(),
    durations: formDataInput.get('durations')?.toString() || '0',
    resumptionDate: formDataInput.get('resumptionDate')?.toString(),
    reason: formDataInput.get('reason')?.toString(),
  };

  const parsed = leaveApplicationSchema.safeParse(rawData);
  if (!parsed.success) {
    throw new Error('Validation failed');
  }

  const token = (await cookies()).get('token')?.value;
  if (!token) throw new Error('Token not found');

  await postLeaveApplication(token, formDataInput);

  revalidatePath('/leave-applications');
  redirect('/leave-applications');
};
