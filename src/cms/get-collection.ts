import { API_BASE_URL, CACHE_OPTION, CACHE_REVALIDATION } from "./config";

export const getCollection = async <T>(endpoint: string) => {
  const url = `${API_BASE_URL}/api/${endpoint}`;

  try {
    const res = await fetch(`${url}?limit=0`, {
      cache: CACHE_OPTION,
      next: { revalidate: CACHE_REVALIDATION },
    });

    if (!res.ok) {
      throw new Error(`${res.status} - ${res.statusText}`);
    }

    const data: { docs: T[]; hasNextPage: boolean } = await res.json();
    return data.docs;
  } catch (err: any) {
    throw err;
  }
};
