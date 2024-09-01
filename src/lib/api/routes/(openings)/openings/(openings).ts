import { z, ZodArray } from "zod";
import { get, QueryResult } from "~/lib/api";
import { Opening } from "~/lib/api/models";

export function getOpenings(
  limit?: number,
  offset?: number,
): QueryResult<ZodArray<typeof Opening>> {
  return {
    queryKey: ["openings", limit, offset],
    queryFn: () =>
      get({
        route: "/openings",
        queryParams: { limit, offset },
        schema: z.array(Opening),
      }),
  };
}
