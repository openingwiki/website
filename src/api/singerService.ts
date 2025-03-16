import apiClient from "@/api/apiClient";


export const addArtist = async (artistName: string): Promise<bigint> => {
    const formData = new FormData();
    formData.append("name", artistName);

    const response = await apiClient.post("/artist", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return BigInt(response.status);
}