import { z } from "zod";

// const API_BASE_KEY: URL = new URL(import.meta.env.VITE_API_BASE as string);

const OpeningSchema = z
  .object({
    // `animeName`
    anime_name: z.string(),
    codename: z.string(),
    id: z.number().positive(),
    name: z.string(),
    // `thumbnailLink`
    thumbnail_link: z
      .string()
      .url()
      .transform((link) => new URL(link)),
    // `youtubeEmbedLink`
    youtube_embed_link: z
      .string()
      .url()
      .transform((link) => new URL(link)),
  })
  .transform((rename) => {
    const {
      anime_name: animeName,
      thumbnail_link: thumbnailLink,
      youtube_embed_link: youtubeEmbedLink,
      ...rest
    } = rename;
    return { ...rest, animeName, thumbnailLink, youtubeEmbedLink };
  });

const OpeningsSchema = z.array(OpeningSchema);

export async function useApiOpenings(
  limit: number,
  offset?: number,
): Promise<z.infer<typeof OpeningsSchema>> {
  const url = new URL("http://127.0.0.1:8080/openings");
  const searchParams = new URLSearchParams({ limit: limit.toString() });
  if (offset !== undefined) {
    searchParams.set("offset", offset.toString());
  }
  url.search = searchParams.toString();

  return OpeningsSchema.parseAsync(
    await fetch(url).then((response) => response.json()),
  );
}

export async function useApiOpening(
  codename: string,
): Promise<z.infer<typeof OpeningSchema>> {
  const url = new URL(`http://127.0.0.1:8080/openings/${codename}`);

  return OpeningSchema.parseAsync(
    await fetch(url).then((response) => response.json()),
  );
}
