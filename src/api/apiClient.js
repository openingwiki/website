import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8080/api", // Load from .env
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000 // Optional: set request timeout (in ms)
});



// Request Interceptor (optional: add auth token, logging, etc.)
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // Example token storage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor (optional: handle global errors)
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);

export default apiClient;
