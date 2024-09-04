import { z } from "zod";
import { request, type QueryResult } from "~/lib/api";
import { Opening } from "~/lib/api/models";

export async function getOpening(
  codename: string,
): Promise<z.infer<typeof Opening>> {
  const codenameLower = codename.toLowerCase();

  return await request({
    method: "GET",
    route: `/openings/${codenameLower}`,
    responseSchema: Opening,
  });
}

export function getOpeningQuery(codename: string): QueryResult<typeof Opening> {
  const codenameLower = codename.toLowerCase();

  return {
    queryKey: ["openings", "--codename", codenameLower],
    queryFn: async () => await getOpening(codenameLower),
  };
}
