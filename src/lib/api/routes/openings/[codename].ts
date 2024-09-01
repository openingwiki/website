import { get, Result } from "~/lib/api";
import { Opening } from "~/lib/api/models";

export async function getOpening(codename: string): Result<typeof Opening> {
  return await get({
    route: `/openings/${codename}`,
    schema: Opening,
  });
}
