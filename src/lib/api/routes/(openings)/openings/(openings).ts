import { z, type ZodArray } from "zod";
import { get, type QueryResult } from "~/lib/api";
import { Opening } from "~/lib/api/models";

export async function getOpenings(
  limit?: number,
  offset?: number,
): Promise<z.infer<typeof Opening>[]> {
  return await get({
    route: "/openings",
    queryParams: { limit, offset },
    responseSchema: z.array(Opening),
  });
}

export function getOpeningsQuery(
  limit?: number,
  offset?: number,
): QueryResult<ZodArray<typeof Opening>> {
  return {
    queryKey: ["openings", "--limit", limit, "--offset", offset],
    queryFn: async () => await getOpenings(limit, offset),
  };
}
