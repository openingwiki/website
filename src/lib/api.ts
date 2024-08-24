import { z, type ZodSchema } from "zod";

function apiUrl(
  apiRoute: string,
  queryParams?: Record<string, string | number | undefined>,
): URL {
  const apiUrl = new URL(apiRoute, import.meta.env.VITE_API_BASE as string);

  const searchParams = new URLSearchParams();
  for (const name in queryParams) {
    if (queryParams[name] !== undefined) {
      searchParams.set(name, queryParams[name].toString());
    }
  }
  apiUrl.search = searchParams.toString();

  return apiUrl;
}

type GetParams<T extends ZodSchema> = {
  route: string;
  queryParams?: Record<string, string | number | undefined>;
  schema: T;
};

export async function get<T extends ZodSchema>(
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
