'use server';

import { API_URL } from '@/constants/api_url';
// import { fetchData } from '@/services/apiService';
import { LeaveApplication } from '@/types/components';
import { leaveApplicationSchema } from '@/utils/schemas/leaveApplicationSchema';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const fetchLeaveApplications = async () => {
  const token = (await cookies()).get('token')?.value;

  const res = await fetch(`${API_URL}/leave-applications/`, {
    method: 'GET',
    next: { revalidate: 60 },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch leave history');
  }

  const data: LeaveApplication = await res.json();

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
    console.error('Validation errors:', parsed.error.format());
    throw new Error('Validation failed');
  }

  const token = (await cookies()).get('token')?.value;

  const res = await fetch(`${API_URL}/leave-applications/`, {
    method: 'POST',
    next: { revalidate: 60 },
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formDataInput,
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Leave application failed:', errorText);
    throw new Error(`API Error: ${res.status} - ${errorText}`);
  }

  revalidatePath('/leave-applications');
  redirect('/leave-applications');
};
