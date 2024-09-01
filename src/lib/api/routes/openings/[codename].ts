import { get, QueryResult } from "~/lib/api";
import { Opening } from "~/lib/api/models";

export function getOpening(codename: string): QueryResult<typeof Opening> {
  const codenameLower = codename.toLowerCase();

  return {
    queryKey: ["openings", codenameLower],
    queryFn: () =>
      get({
        route: `/openings/${codenameLower}`,
        schema: Opening,
      }),
  };
}
