import { request, type QueryResult } from "~/lib/api";
import { Opening } from "~/lib/api/models";

export function getOpening(codename: string): QueryResult<typeof Opening> {
  const codenameLower = codename.toLowerCase();

  return {
    queryKey: ["openings", "--codename", codenameLower],
    queryFn: () =>
      request({
        method: "GET",
        route: `/openings/${codenameLower}`,
        responseSchema: Opening,
      }),
  };
}
