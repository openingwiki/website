import { z } from "zod";
import { post } from "~/lib/api";
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
