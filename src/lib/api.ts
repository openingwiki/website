import { z, type ZodTypeAny } from "zod";

export type QueryResult<T extends ZodTypeAny> = {
  queryKey: unknown[];
  queryFn: () => Promise<z.infer<T>>;
};

type GetParams<T extends ZodTypeAny> = {
  route: string;
  queryParams?: QueryParams;
  schema: T;
};

export async function get<T extends ZodTypeAny>(
  params: GetParams<T>,
): Promise<z.infer<T>> {
  const url = apiUrl(params.route, params.queryParams);

  const jsonObject = await fetch(url).then(
    (response) => response.json() as unknown,
  );

  const result = params.schema.parse(jsonObject) as T;

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
