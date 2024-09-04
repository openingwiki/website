import { z, type ZodArray } from "zod";
import { request, type QueryResult } from "~/lib/api";
import { Opening } from "~/lib/api/models";

export function getOpenings(
  limit?: number,
  offset?: number,
): QueryResult<ZodArray<typeof Opening>> {
  return {
    queryKey: ["openings", "--limit", limit, "--offset", offset],
    queryFn: () =>
      request({
        method: "GET",
        route: "/openings",
        queryParams: { limit, offset },
        responseSchema: z.array(Opening),
      }),
  };
}
