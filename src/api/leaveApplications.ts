'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// Constants
import { ENDPOINT_LEAVE } from '@/constants/api-endpoint';
import { ERROR_MESSAGE } from '@/constants/error';

// Services
import {
  getLeaveApplicationById,
  getLeaveApplications,
  postLeaveApplication,
  patchLeaveApplication,
  deleteLeave,
  exportLeave,
} from '@/services/apiService';

// Types
import { LeaveApplication } from '@/types/components';

// Utils
import { leaveApplicationSchema } from '@/utils/schemas/leaveApplicationSchema';

// Get Leave Applications
export const fetchLeaveApplications = async () => {
  const data: LeaveApplication = await getLeaveApplications();
  return data;
};

// Get Leave Application by ID
export const fetchLeaveApplicationById = async (id: string) => {
  const data = await getLeaveApplicationById(id);

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
    throw new Error(ERROR_MESSAGE.VALIDATION_FAILED);
  }

  await postLeaveApplication(formDataInput);

  revalidatePath(ENDPOINT_LEAVE);
  redirect(ENDPOINT_LEAVE);
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
    throw new Error(ERROR_MESSAGE.VALIDATION_FAILED);
  }

  await patchLeaveApplication(id, formDataInput);

  revalidatePath(ENDPOINT_LEAVE);
  redirect(ENDPOINT_LEAVE);
};

// Delete Leave Application
export const deleteLeaveApplication = async (id: string) => {
  await deleteLeave(id);
  revalidatePath(ENDPOINT_LEAVE);
};

// Export Leave Applications
export const exportLeaveApplications = async (
  format: 'pdf' | 'csv' | 'excel',
) => {
  console.log('Export started:', format);

  const blob = await exportLeave(format);

  console.log(`Exported ${format}`, blob);

  return blob;
};
