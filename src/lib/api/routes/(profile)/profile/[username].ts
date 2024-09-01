import { get, type QueryResult } from "~/lib/api";
import { User } from "~/lib/api/models";

export function getProfile(username: string): QueryResult<typeof User> {
  return {
    queryKey: ["profile", username],
    queryFn: () =>
      get({
        route: `/profile/${username}`,
        schema: User,
      }),
  };
}
