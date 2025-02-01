import apiClient from "./apiClient";

// Login function
export const login = async (username, password) => {
    try {
        const response = await apiClient.post("/auth/login", { username, password });
        console.log(response);
        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
        }
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};

// Register function
export const register = async (username, password) => {
    try {
        const response = await apiClient.post("/auth/register", { username, password });
        return response.data;
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }
};

// Logout function (removes token)
export const logout = () => {
    localStorage.removeItem("token");
};