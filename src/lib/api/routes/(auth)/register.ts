import { request, type QueryResult } from "~/lib/api";
import { AccessToken } from "~/lib/api/models";

export default function postAuthorize(
  username: string,
  password: string,
): QueryResult<typeof AccessToken> {
  return {
    queryKey: ["register", "--username", username, "--password", password],
    queryFn: () =>
      request({
        method: "POST",
        route: "/register",
        body: {
          username,
          password,
        },
        responseSchema: AccessToken,
      }),
  };
}
