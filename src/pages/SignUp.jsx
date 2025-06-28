import { useState } from "react";
import { Link } from "react-router-dom";
import { signupUser } from "../api/auth.js";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
        toast.error("All fields are required");
        return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(formData.email)) {
        toast.error("Invalid email format");
        return;
        }

        if (formData.password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return;
        }

        try {
        await signupUser({
            username: formData.name,
            email: formData.email,
            password: formData.password,
        });

        toast.success("Successfully Signed Up!");
        setSuccess(true);
        setFormData({ name: "", email: "", password: "" });
        setTimeout(() => setSuccess(false), 3000);
        navigate('/login')
        } catch (error) {
        toast.error(error.response?.data?.message || "Signup failed. Try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-300 flex items-center justify-center px-4">
            <div className="w-full max-w-md p-6 space-y-10">
                <h2 className="text-2xl font-bold text-indigo-600 text-center">Sign Up</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition text-sm"
                >
                    Sign Up
                </button>
                </form>

                <p className="text-sm text-center text-gray-600">
                Already have an account?{" "}
                <Link to="/login">
                    <span className="text-indigo-600 cursor-pointer">Login</span>
                </Link>
                </p>

                <div className="flex items-center justify-center space-x-2 pt-4">
                <p className="text-sm text-gray-600">Or login with</p>
                <button className="text-2xl hover:scale-110 transition">
                    <FcGoogle />
                </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
