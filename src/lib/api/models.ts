import { z } from "zod";

export const Opening = z
  .object({
    // `animeName`
    anime_name: z.string(),
    codename: z.string(),
    id: z.number().int().positive(),
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

export const User = z.object({
  id: z.number().int().positive(),
  username: z.string(),
});
