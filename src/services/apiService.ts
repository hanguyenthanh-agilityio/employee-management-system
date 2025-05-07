import { API_URL } from '@/constants/api_url';

// Get Leave Applications
export const getLeaveApplications = async (token: string) => {
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

  return res.json();
};

// Get leave application ID
export const getLeaveApplicationById = async (token: string, id: string) => {
  const res = await fetch(`${API_URL}/leave-applications/${id}`, {
    method: 'GET',
    next: { revalidate: 60 },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch leave application with ID ${id}`);
  }

  return res.json();
};

// Create Leave Application
export const postLeaveApplication = async (
  token: string,
  formData: FormData,
) => {
  const res = await fetch(`${API_URL}/leave-applications/`, {
    method: 'POST',
    next: { revalidate: 60 },
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API Error: ${res.status} - ${errorText}`);
  }

  return res;
};

// Update Leave Applications
export const patchLeaveApplication = async (
  token: string,
  id: string,
  formData: FormData,
) => {
  const res = await fetch(`${API_URL}/leave-applications/${id}/`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API Error: ${res.status} - ${errorText}`);
  }

  return res;
};
