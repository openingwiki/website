import { z } from "zod";
import { get, type QueryResult } from "~/lib/api";
import { User } from "~/lib/api/models";

export async function getProfile(
  username: string,
): Promise<z.infer<typeof User>> {
  return await get({
    route: `/profile/${username}`,
    responseSchema: User,
  });
}

export function getProfileQuery(username: string): QueryResult<typeof User> {
  return {
    queryKey: ["profile", "--username", username],
    queryFn: async () => await getProfile(username),
  };
}
