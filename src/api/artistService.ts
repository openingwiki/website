import apiClient from "@/api/apiClient";
import {ArtistPreview} from "@/types/artist";


export const addArtist = async (artistName: string): Promise<bigint> => {
    const response = await apiClient.post("/artist/", {
        name: artistName
    });
    return BigInt(response.status);
}

export const getArtistByName = async (artistName: string): Promise<ArtistPreview[]> => {
    const response = await apiClient.get("/artist/", {
        params: {
            query: artistName
        }
    })
    return response.data;
}