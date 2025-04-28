'use server';

import { fetchData } from '@/services/apiService';
import { CreateLeavePayload } from '@/types/components';
import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';

export const fetchLeaveApplications = async () => {
  const data = await fetchData('/leave-applications', 'GET');

  return data;
};

// Create Leave Application
export const createLeaveApplication = async (formData: FormData) => {
  const startDate = formData.get('startDate') as string;
  const endDate = formData.get('endDate') as string;
  const resumptionDate = formData.get('resumptionDate') as string;
  const type = formData.get('leaveType') as string;
  const reason = formData.get('reason') as string;
  const durations = Number(formData.get('duration'));

  const body: CreateLeavePayload = {
    startDate,
    endDate,
    resumptionDate,
    type,
    reason,
    durations,
    // employeeName: 'Nhan Tran',
  };
  try {
    const data = await fetchData('/leave-applications', 'POST', body);

    console.log('Leave create:', data);

    revalidatePath('/leave-applications');

    // redirect('/leave-applications');
  } catch (error) {
    console.error(error);
    throw error;
  }
};
