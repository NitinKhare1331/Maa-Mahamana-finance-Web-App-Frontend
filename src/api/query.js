import axiosInstance from "./axiosInstance.js";

export const customerQuery = async (userData) => {
    const response = await axiosInstance.post("/query/createQuery", userData);
    return response.data;
}