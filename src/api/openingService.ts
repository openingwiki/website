import apiClient from "@/api/apiClient";


export const addOpening = async (
    openingName: string, animeId: number, artistIds: number[], youtubeEmbedLink: string
): Promise<bigint> => {
    const response = await apiClient.post("/openings/", {
        name: openingName,
        animeId: animeId,
        artistIds: artistIds,
        youtubeEmbedLink: youtubeEmbedLink
    });
    return BigInt(response.status);
}