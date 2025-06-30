import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api/auth.js";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {

    const navigate = useNavigate();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
        toast.error("All fields are required");
        return;
    }

    if (formData.password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return;
    }

    setIsSubmitting(true);

    try {
        const response = await loginUser({
            email: formData.email,
            password: formData.password,
        });

        if (!response.success) {
            toast.error(response.message || "Login failed");
            setIsSubmitting(false);
            return;
        }

        const { token, role, email } = response.data;

        login({ email, role, token });

        toast.success("Logged in successfully!");
        setFormData({ email: "", password: "" });



        if (role === "admin") {
            navigate("/adminDashboard");
        } else if (email.endsWith("@employee.com") || role === "employee") {
            navigate("/employeeDashboard");
        } else {
            navigate("/home");
        }


    } catch (error) {
        toast.error("Login failed. Try again.");
        console.error("Login error:", error);
        setIsSubmitting(false);
    }
};


    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-300 flex items-center justify-center px-4">
            <div className="w-full max-w-md p-6 space-y-10">
                <h2 className="text-2xl font-bold text-indigo-600 text-center">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                    disabled={isSubmitting}
                    className={`w-full py-2 rounded text-sm transition text-white ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                >
                    {isSubmitting ? 'Logging in...' : 'Login'}
                </button>


                </form>

                <p className="text-sm text-center text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup">
                    <span className="text-indigo-600 cursor-pointer">Sign Up</span>
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

export default Login;
