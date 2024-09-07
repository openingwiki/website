import { z } from "zod";
import { post, type QueryResult } from "~/lib/api";
import { AccessToken } from "~/lib/api/models";

export async function postRegister(
  username: string,
  password: string,
): Promise<z.infer<typeof AccessToken>> {
  return await post({
    route: "/register",
    body: {
      username,
      password,
    },
    responseSchema: AccessToken,
  });
}

export function postRegisterQuery(
  username: string,
  password: string,
): QueryResult<typeof AccessToken> {
  return {
    queryKey: ["register", "--username", username, "--password", password],
    queryFn: async () => await postRegister(username, password),
  };
}
