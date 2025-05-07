'use server';

import {
  getLeaveApplicationById,
  getLeaveApplications,
  postLeaveApplication,
  patchLeaveApplication,
} from '@/services/apiService';
import { LeaveApplication } from '@/types/components';
import { getTokenFromCookies } from '@/utils/auth';
import { leaveApplicationSchema } from '@/utils/schemas/leaveApplicationSchema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const fetchLeaveApplications = async () => {
  const token = await getTokenFromCookies();

  const data: LeaveApplication = await getLeaveApplications(token);
  return data;
};

// Get Leave Application by ID
export const fetchLeaveApplicationById = async (id: string) => {
  const token = await getTokenFromCookies();
  const data = await getLeaveApplicationById(token, id);
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

  const token = await getTokenFromCookies();

  await postLeaveApplication(token, formDataInput);

  revalidatePath('/leave-applications');
  redirect('/leave-applications');
};

// Update Leave Application
export const updateLeaveApplication = async (
  id: string,
  formDataInput: FormData,
) => {
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

  const token = await getTokenFromCookies();

  await patchLeaveApplication(token, id, formDataInput);

  revalidatePath('/leave-applications');
  redirect('/leave-applications');
};
