import { API_URL } from '@/constants/api_url';
import { LoginInput, RegisterInput } from '@/utils/schemas/authSchema';

// Login
export const login = async (data: LoginInput) => {
  const res = await fetch(`${API_URL}/accounts/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Login failed');
  }

  return res.json();
};

// Register
export const register = async (data: RegisterInput) => {
  const res = await fetch(`${API_URL}/accounts/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Register failed');
  }

  return res.json();
};

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

// Delete Leave Application
export const deleteLeave = async (token: string, id: string) => {
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

// Export Leave Applications
export const exportLeave = async (
  token: string,
  format: 'pdf' | 'csv' | 'excel',
): Promise<Blob> => {
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
