import { type QueryResult } from "~/lib/api";
import { AccessToken } from "~/lib/api/models";

export default function postAuthorize(
  username: string,
  password: string,
): QueryResult<typeof AccessToken> {
  return {
    queryKey: ["register", username, password],
    queryFn: () => ({}),
  };
}
