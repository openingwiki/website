import { z, type ZodTypeAny } from "zod";

export type QueryResult<T extends ZodTypeAny> = {
  queryKey: unknown[];
  queryFn: () => Promise<z.infer<T>>;
};

interface RequestParams<T extends ZodTypeAny> {
  route: string;
  queryParams?: QueryParams;
  body?: object;
  responseSchema: T;
}

export async function get<T extends ZodTypeAny>(
  params: RequestParams<T>,
): Promise<z.infer<T>> {
  return (await request({ method: "GET", ...params })) as T;
}

export async function post<T extends ZodTypeAny>(
  params: RequestParams<T>,
): Promise<z.infer<T>> {
  return (await request({ method: "POST", ...params })) as T;
}

interface FullRequestParams<T extends ZodTypeAny> extends RequestParams<T> {
  method: "GET" | "POST";
}

async function request<T extends ZodTypeAny>(
  params: FullRequestParams<T>,
): Promise<z.infer<T>> {
  const url = apiUrl(params.route, params.queryParams);

  const requestInit: RequestInit = {
    method: params.method,
    body: params.body !== undefined ? JSON.stringify(params.body) : undefined,
  };

  let response;
  try {
    response = await fetch(url, requestInit);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_e) {
    throw new Error("fetch failed\n" + JSON.stringify(params));
  }

  if (!response.ok) {
    throw new Error(
      `got status ${response.status.toString()}\n` +
        `request: ${JSON.stringify(params)}`,
    );
  }

  let jsonObject;
  try {
    jsonObject = (await response.json()) as unknown;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_e) {
    return new Error("couldn't convert to json\n" + JSON.stringify(response));
  }

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
