import axiosInstance from "./axiosInstance.js";

export const getAllEmployees = async () => {
    const response = await axiosInstance.get("/users/getEmployees");
    return response.data;
}