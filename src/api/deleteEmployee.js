import axiosInstance from "./axiosInstance.js";

export const deleteEmployeeById = async (id) => {
    try {
        const response = await axiosInstance.delete(`/users/deleteEmployeeData/${id}`);
        return response.data;
    } catch (error) {
        console.error("Delete employee failed", error);
        throw error;
    }
};
