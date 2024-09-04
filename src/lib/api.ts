import { z, type ZodTypeAny } from "zod";

export type QueryResult<T extends ZodTypeAny> = {
  queryKey: unknown[];
  queryFn: () => Promise<z.infer<T>>;
};

type RequestParams<T extends ZodTypeAny> = {
  method: "GET" | "POST";
  route: string;
  queryParams?: QueryParams;
  body?: object;
  responseSchema: T;
};

export async function request<T extends ZodTypeAny>(
  params: RequestParams<T>,
): Promise<z.infer<T>> {
  const url = apiUrl(params.route, params.queryParams);

  const requestInit: RequestInit = {
    method: params.method,
    body: params.body !== undefined ? JSON.stringify(params.body) : undefined,
  };

  const jsonObject = await fetch(url, requestInit).then(
    (response) => response.json() as unknown,
  );

  const result = params.responseSchema.parse(jsonObject) as T;

  return result;
}

type QueryParams = Record<string, string | number | undefined>;

function apiUrl(apiRoute: string, queryParams?: QueryParams): URL {
  const API_BASE = import.meta.env.VITE_API_BASE as string;
  const apiUrl = new URL(apiRoute, API_BASE);

  if (queryParams !== undefined) {
    apiUrl.search = parseQueryParams(queryParams).toString();
  }

  return apiUrl;
}

function parseQueryParams(queryParams: QueryParams): URLSearchParams {
  const searchParams = new URLSearchParams();

  for (const name in queryParams) {
    if (queryParams[name] !== undefined) {
      searchParams.set(name, queryParams[name].toString());
    }
  }

  return searchParams;
}
