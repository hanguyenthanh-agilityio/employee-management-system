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

  const res = await fetch(
    'https://human-resource.up.railway.app/api/leave-applications/',
    {
      method: 'GET',
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch leave history');
  }

  const data: LeaveApplication = await res.json();

  return data;
};

// Create Leave Application
export const createLeaveApplication = async (formDataInput: FormData) => {
  const rawData = {
    leaveType: formDataInput.get('leaveType'),
    startDate: formDataInput.get('startDate'),
    endDate: formDataInput.get('endDate'),
    durations: formDataInput.get('durations'),
    resumptionDate: formDataInput.get('resumptionDate'),
    reason: formDataInput.get('reason'),
  };

  const parsed = leaveApplicationSchema.safeParse(rawData);

  if (!parsed.success) {
    console.error('Validation errors:', parsed.error.format());
    throw new Error('Validation failed');
  }

  const token = (await cookies()).get('token')?.value;

  const payload = {
    start_date: parsed.data.startDate,
    end_date: parsed.data.endDate,
    resumption_date: parsed.data.resumptionDate,
    type: parsed.data.leaveType,
    reason: parsed.data.reason,
    durations: parsed.data.durations,
  };

  try {
    const res = await fetch(`${API_URL}/leave-applications`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`API Error: ${res.statusText}`);
    }
    revalidatePath('/leave-applications');
    redirect('/leave-applications');
  } catch (error) {
    console.error('Error in creating leave application:', error);
    throw error;
  }
};
