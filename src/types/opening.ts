import {AnimePreview} from "@/types/anime";
import {ArtistPreview} from "@/types/artist";

export interface OpeningPreview {
    id: number,
    name: string,
    thumbnailLink: string,
    animeName: string,
    artistNames: string[]
}

export interface Opening {
    id: number,
    name: string,
    thumbnailLink: string,
    youtubeEmbedLink: string,
    anime: AnimePreview,
    artists: ArtistPreview[],
}

export interface OpeningPreviewSearch {
    totalNumber: number,
    openingPreviews: OpeningPreview[]
}