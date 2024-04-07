import { API_BASE_URL, CACHE_OPTION, CACHE_REVALIDATION } from "./config";

export const getGlobal = async <T>(endpoint: string) => {
  const url = `${API_BASE_URL}/api/globals/${endpoint}`;

  try {
    const res = await fetch(`${url}`, {
      cache: CACHE_OPTION,
      next: { revalidate: CACHE_REVALIDATION },
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const data: T = await res.json();
      return data;
    }

    throw new Error(`${res.status} - ${res.statusText}`);
  } catch (err: any) {
    throw err;
  }
};
