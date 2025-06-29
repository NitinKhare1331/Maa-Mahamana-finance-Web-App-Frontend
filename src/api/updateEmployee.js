import axiosInstance from "./axiosInstance.js";

export const updateEmployeeById = async (id, updatedData) => {
    try {
        const response = await axiosInstance.put(`/users/updateEmployeeData/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Update employee failed", error);
        throw error;
    }
};
