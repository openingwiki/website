import { z } from "zod";
import { post, type QueryResult } from "~/lib/api";
import { AccessToken } from "~/lib/api/models";

export async function postAuthorize(
  username: string,
  password: string,
): Promise<z.infer<typeof AccessToken>> {
  return await post({
    route: "/auth",
    body: {
      username,
      password,
    },
    responseSchema: AccessToken,
  });
}

export function postAuthorizeQuery(
  username: string,
  password: string,
): QueryResult<typeof AccessToken> {
  return {
    queryKey: ["auth", "--username", username, "--password", password],
    queryFn: async () => await postAuthorize(username, password),
  };
}
