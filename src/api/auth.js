import axiosInstance from "./axiosInstance.js";

export const signupUser = async (userData) => {
    const response = await axiosInstance.post("/users/signup", userData);
    return response.data;
}

export const loginUser = async (userData) => {
    const response = await axiosInstance.post("/users/login", userData);
    const token = response.headers['authorization'];
    localStorage.setItem("token", token);
    return response.data;
}