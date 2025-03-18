import apiClient from "@/api/apiClient";
import {AnimePreview} from "@/types/anime";


export const addAnime = async (animeName: string, file: File): Promise<bigint> => {
    const formData = new FormData();
    formData.append("name", animeName);
    formData.append("preview", file);

    const response = await apiClient.post("/anime", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return BigInt(response.status);
}

export const getAnimeByName = async (animeName: string): Promise<AnimePreview[]> => {
    const response = await apiClient.get("/anime", {
        params: {
            query: animeName
        }
    })
    return response.data;
}