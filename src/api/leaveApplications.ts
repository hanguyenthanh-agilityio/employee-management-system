import { ACCESS_TOKEN } from '@/constants/access-token';
import { LeaveApplication } from '@/types/components';

export const fetchLeaveApplications = async () => {
  const res = await fetch(
    'https://human-resource.up.railway.app/api/leave-applications/',
    {
      method: 'GET',
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch leave history');
  }

  const data: LeaveApplication = await res.json();

  return data;
};
