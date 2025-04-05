import apiClient from "@/api/apiClient";
import {OpeningPreview} from "@/types/opening";


export const addOpening = async (
    openingName: string, animeId: number, artistIds: number[], youtubeEmbedLink: string
): Promise<number> => {
    const response = await apiClient.post("/openings/", {
        name: openingName,
        animeId: animeId,
        artistIds: artistIds,
        youtubeEmbedLink: youtubeEmbedLink
    });
    return response.status;
}

export const searchOpenings = async (
    limit: number, offset: number, query = ""
): Promise<OpeningPreview[]> => {
    const response = await apiClient.get<OpeningPreview[]>("/openings/", {
        params: {
            limit: limit,
            offset: offset,
            query: query
        }
    });
    return response.data;
}