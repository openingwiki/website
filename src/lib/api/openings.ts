import { z } from "zod";
import { endpoint } from "~/lib/api";

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

export async function getOpenings(
  limit: number,
  offset?: number,
): Promise<z.infer<typeof OpeningsSchema>> {
  const url = endpoint("/openings", { limit, offset });

  return OpeningsSchema.parseAsync(
    await fetch(url).then((response) => response.json()),
  );
}

export async function getOpening(
  codename: string,
): Promise<z.infer<typeof OpeningSchema>> {
  const url = endpoint(`/openings/${codename}`);

  return OpeningSchema.parseAsync(
    await fetch(url).then((response) => response.json()),
  );
}
