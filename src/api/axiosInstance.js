import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const token = user?.token;

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        Authorization: token ? `Bearer ${token}` : undefined
    }
});

export default axiosInstance;