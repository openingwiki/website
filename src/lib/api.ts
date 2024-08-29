import { z, type ZodTypeAny } from "zod";

export type Result<T extends ZodTypeAny> = Promise<z.infer<T> | undefined>;

type GetParams<T extends ZodTypeAny> = {
  route: string;
  queryParams?: QueryParams;
  schema: T;
};

export async function get<T extends ZodTypeAny>(
  params: GetParams<T>,
): Promise<z.infer<T> | undefined> {
  const url = apiUrl(params.route, params.queryParams);

  let response;
  try {
    response = await fetch(url);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    return undefined;
  }

  if (!response.ok) {
    console.error(response);
    return undefined;
  }

  const result = params.schema.safeParse(await response.json());

  if (result.success) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return result.data;
  } else {
    console.error(result.error.errors);
    return undefined;
  }
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
