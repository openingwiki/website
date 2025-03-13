import apiClient from "@/api/apiClient";
import {UserProfile} from "@/types/user";


export const getUserProfile = async (): Promise<UserProfile> => {
    const response = await apiClient.get<UserProfile>("/users/me");
    return response.data;
}

export const loginUser = async (username: string, password: string): Promise<UserProfile> => {
    const response = await apiClient.post("/auth/login", {
        username: username,
        password: password
    });
    return response.data;
}

export const registerUser = async (username: string, password: string): Promise<UserProfile> => {
    const response = await apiClient.post("/auth/register", {
        username: username,
        password: password
    });
    return response.data;
}
