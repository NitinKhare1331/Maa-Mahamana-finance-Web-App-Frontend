import axiosInstance from "./axiosInstance.js";

export const createEmployee = async (employeeData) => {
    const response = await axiosInstance.post("/users/createEmployee", employeeData);
    return response.data;
}