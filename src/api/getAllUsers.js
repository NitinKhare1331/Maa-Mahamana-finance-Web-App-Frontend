import axiosInstance from "./axiosInstance.js";

export const getAllUsers = async () => {
    const response = await axiosInstance.get("/users/getUsers");
    return response.data;
}