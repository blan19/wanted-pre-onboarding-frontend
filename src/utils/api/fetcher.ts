import { getErrorMessage } from "../misc";

interface FetcherRequestInit extends RequestInit {
  params?: number | string;
  query?: {
    [key: string]: any;
  };
}

const fetcher = async (url: string, options: FetcherRequestInit) => {
  const { params, query, ...rest } = options;

  if (params) url += `/${params}`;
  if (query) url += `?${new URLSearchParams(query)}`;
  try {
    const response = await fetch(url, rest);

    if (!response.ok) throw new Error(response.url);

    return await response.json();
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export default fetcher;
