'use server';

import { API_URL } from '@/constants/api_url';
import { fetchData } from '@/services/apiService';
import { leaveApplicationSchema } from '@/utils/schemas/leaveApplicationSchema';
// import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';

export const fetchLeaveApplications = async () => {
  const data = await fetchData('/leave-applications', 'GET');

  return data;
};

// Create Leave Application
export const createLeaveApplication = async (formDataInput: FormData) => {
  const rawData = {
    leaveType: formDataInput.get('leaveType'),
    startDate: formDataInput.get('startDate'),
    endDate: formDataInput.get('endDate'),
    duration: formDataInput.get('duration'),
    resumptionDate: formDataInput.get('resumptionDate'),
    reason: formDataInput.get('reason'),
  };

  const parsed = leaveApplicationSchema.safeParse(rawData);

  if (!parsed.success) {
    console.error('Validation errors:', parsed.error.format());
    throw new Error('Validation failed');
  }

  const token = (await cookies()).get('token')?.value;

  const formData = new FormData();
  formData.append('startDate', parsed.data.startDate);
  formData.append('endDate', parsed.data.endDate);
  formData.append('resumptionDate', parsed.data.resumptionDate);
  formData.append('type', parsed.data.leaveType);
  formData.append('reason', parsed.data.reason);
  formData.append('durations', parsed.data.duration.toString());

  // formData.append('employeeName', 'Nhan Tran');

  try {
    const res = await fetch(`${API_URL}/leave-applications`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    if (!res.ok) {
      throw new Error(`API Error: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error in creating leave application:', error);
    throw error;
  }
};
