export function endpoint(
  route: string,
  queryParams?: Record<string, string | number | undefined>,
): URL {
  const apiUrl = new URL(route, import.meta.env.VITE_API_BASE as string);

  const searchParams = new URLSearchParams();
  for (const name in queryParams) {
    if (queryParams[name] !== undefined) {
      searchParams.set(name, queryParams[name].toString());
    }
  }
  apiUrl.search = searchParams.toString();

  return apiUrl;
}
