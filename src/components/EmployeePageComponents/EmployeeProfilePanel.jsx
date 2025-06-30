import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const ProfilePanel = ({ isOpen, onClose }) => {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        onClose();
        navigate("/login");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col gap-4"
                >
                    <button
                        className="self-end text-gray-600 hover:text-black"
                        onClick={onClose}
                    >
                        <X size={24} />
                    </button>

                    <div className="text-2xl font-semibold text-indigo-600">Your Profile</div>

                    <ul className="text-md text-gray-700 flex flex-col gap-2 cursor-pointer">
                        <li className="hover:underline">Dashboard</li>
                        <li className="hover:underline">Email</li>
                        <li className="hover:underline">Compose</li>
                        <li className="hover:underline">Calender</li>
                        <li className="hover:underline">Profile</li>
                    </ul>

                    <button
                        onClick={handleLogout}
                        className="mt-auto bg-red-600 text-white py-2 rounded hover:bg-red-700 transition cursor-pointer"
                    >
                        Logout
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProfilePanel;
