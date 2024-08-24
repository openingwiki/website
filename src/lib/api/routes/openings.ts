import { z } from "zod";
import { get } from "~/lib/api";
import { Opening } from "~/lib/api/models";

const Openings = z.array(Opening);

export async function getOpenings(
  limit?: number,
  offset?: number,
): Promise<z.infer<typeof Openings> | undefined> {
  return await get({
    route: "/openings",
    queryParams: { limit, offset },
    schema: Openings,
  });
}

export async function getOpening(
  codename: string,
): Promise<z.infer<typeof Opening> | undefined> {
  return await get({
    route: `/openings/${codename}`,
    schema: Opening,
  });
}
