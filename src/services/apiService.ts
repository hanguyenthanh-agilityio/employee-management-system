// Constants
import { API_URL } from '@/constants/api_url';

// Utils
import { getTokenFromCookies } from '@/utils/auth';

// Get Leave Applications
export const getLeaveApplications = async () => {
  const token = await getTokenFromCookies();

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
export const getLeaveApplicationById = async (id: string) => {
  const token = await getTokenFromCookies();

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
export const postLeaveApplication = async (formData: FormData) => {
  const token = await getTokenFromCookies();

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
export const patchLeaveApplication = async (id: string, formData: FormData) => {
  const token = await getTokenFromCookies();

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

// Delete Leave Application
export const deleteLeave = async (id: string) => {
  const token = await getTokenFromCookies();

  const res = await fetch(`${API_URL}/leave-applications/${id}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('API Delete error:', res.status, errorText);
    throw new Error('Failed to delete leave application');
  }

  return res;
};

/**
 * FETCH API EXPORT
 * Get authentication token from cookies
 * Call api to download export file in format
 * Check if API error
 * Returns blob data from server
 */
export const exportLeave = async (
  format: 'pdf' | 'csv' | 'excel',
): Promise<Blob> => {
  const token = await getTokenFromCookies();

  console.log('Calling export API:', format);

  const res = await fetch(`${API_URL}/leave-applications/download/${format}/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to export leave applications as ${format}`);
  }

  return res.blob();
};
