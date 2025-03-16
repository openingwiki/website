import apiClient from "@/api/apiClient";
import {UserProfile} from "@/types/user";


export const getUserProfile = async (): Promise<UserProfile> => {
    const response = await apiClient.get<UserProfile>("/users/me");
    return response.data;
}

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