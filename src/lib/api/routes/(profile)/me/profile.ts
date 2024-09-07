import { z } from "zod";
import { get, type QueryResult } from "~/lib/api";
import { User } from "~/lib/api/models";
import { token } from "~/lib/session";

export async function getMe(): Promise<z.infer<typeof User>> {
  const t = token();
  let headers: Record<string, string> | undefined;
  if (t !== undefined) {
    headers = { Authorization: `Bearer ${t}` };
  } else {
    headers = undefined;
  }

  return await get({
    route: `/me/profile`,
    responseSchema: User,
    headers,
  });
}

export function getMeQuery(): QueryResult<typeof User> {
  return {
    queryKey: ["me", "profile"],
    queryFn: async () => await getMe(),
  };
}
