import { API_URL } from '@/constants/api_url';
import { cookies } from 'next/headers';

export const fetchData = async (
  endpoint: string,
  method: 'GET' | 'POST',
  body: object | FormData | null = null,
  isFormData = false,
) => {
  const token = (await cookies()).get('token')?.value;
  console.log('Token in cookie:', token);

  const headers: HeadersInit = {
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
  };

  const options: RequestInit = {
    method,
    headers,
    cache: 'no-store',
    ...(body && {
      body: isFormData ? (body as FormData) : JSON.stringify(body),
    }),
  };

  try {
    const res = await fetch(`${API_URL}${endpoint}`, options);
    console.log(res);

    if (!res.ok) {
      console.error(`Failed API call: ${res.status} - ${res.statusText}`);
      throw new Error(`API call failed: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error in fetchData: ', error);
    throw error;
  }
};
