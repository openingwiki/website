import { request, type QueryResult } from "~/lib/api";
import { User } from "~/lib/api/models";

export function getProfile(username: string): QueryResult<typeof User> {
  return {
    queryKey: ["profile", "--username", username],
    queryFn: () =>
      request({
        method: "GET",
        route: `/profile/${username}`,
        responseSchema: User,
      }),
  };
}
