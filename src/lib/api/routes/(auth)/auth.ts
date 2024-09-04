import { request, type QueryResult } from "~/lib/api";
import { AccessToken } from "~/lib/api/models";

export default function postAuthorize(
  username: string,
  password: string,
): QueryResult<typeof AccessToken> {
  return {
    queryKey: ["auth", "--username", username, "--password", password],
    queryFn: () =>
      request({
        method: "POST",
        route: "/auth",
        body: {
          username,
          password,
        },
        responseSchema: AccessToken,
      }),
  };
}
