import apiClient from "@/api/apiClient";
import {AnimePreview} from "@/types/anime";


export const addAnime = async (animeName: string, file: File): Promise<number> => {
    const formData = new FormData();
    formData.append("preview", file);

    const response_post_request = await apiClient.post<AnimePreview>("/anime/", {
        name: animeName,
    });
    const response_image_post_request = await apiClient.post(`/anime/${response_post_request.data.id}/preview-image`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response_image_post_request.status;
}

export const getAnimeByName = async (animeName: string): Promise<AnimePreview[]> => {
    const response = await apiClient.get("/anime/", {
        params: {
            query: animeName
        }
    })
    return response.data;
}