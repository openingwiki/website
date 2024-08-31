import { z, ZodArray } from "zod";
import { get, Result } from "~/lib/api";
import { Opening } from "~/lib/api/models";

export async function getOpenings(
  limit?: number,
  offset?: number,
): Result<ZodArray<typeof Opening>> {
  return await get({
    route: "/openings",
    queryParams: { limit, offset },
    schema: z.array(Opening),
  });
}
