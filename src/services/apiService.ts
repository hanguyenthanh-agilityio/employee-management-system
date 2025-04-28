import { ACCESS_TOKEN } from '@/constants/access-token';
import { API_URL } from '@/constants/api_url';

export const fetchData = async (
  endpoint: string,
  method: 'GET' | 'POST' = 'GET',
  body: object | null = null,
) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  };

  const options: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
    next: { revalidate: 60 }, // Revalidate every 60 seconds (cho GET)
  };

  try {
    const res = await fetch(`${API_URL}${endpoint}`, options);

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
