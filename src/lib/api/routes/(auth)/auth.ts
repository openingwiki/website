import { z } from "zod";
import { post } from "~/lib/api";
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
