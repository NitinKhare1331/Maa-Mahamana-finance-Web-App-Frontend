import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import GetACallModal from "./GetACallModal.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
    });

    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);

    const handleLoginClick = () => {
        setClicked(true);
        setTimeout(() => {
            navigate("/signup");
        }, 400);
    };

    const handleSubmit = () => {
        setShowForm(false);
        setShowThankYou(true);
        setFormData({ name: "", email: "", mobile: "" });
        setTimeout(() => setShowThankYou(false), 3000);
    };

    return (
        <>
            <nav className="bg-white shadow-md fixed top-0 w-full z-50">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                    <div className="text-xl font-bold text-indigo-600">Maa Mahamana Finance</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setShowForm(true)}
                            className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                        >
                            Get a Call
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            animate={clicked ? { scale: 0.9, opacity: 0 } : {}}
                            transition={{ duration: 0.4 }}
                            onClick={handleLoginClick}
                            className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm"
                        >
                            Login / Signup
                        </motion.button>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <motion.button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden"
                        whileTap={{ scale: 0.9 }}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={34} />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
                        <button
                            className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                            onClick={() => {
                                setShowForm(true);
                                setMenuOpen(false);
                            }}
                        >
                            Get a Call
                        </button>
                        <button
                            onClick={() => {
                                setMenuOpen(false);
                                handleLoginClick();
                            }}
                            className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm"
                        >
                            Login / Signup
                        </button>
                    </div>
                )}
            </nav>

            {/* Call Modal */}
            <GetACallModal
                showForm={showForm}
                onClose={() => setShowForm(false)}
                onSubmit={handleSubmit}
                formData={formData}
                setFormData={setFormData}
            />

            {/* Thank You Modal */}
            {showThankYou && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center"
                >
                    <div className="bg-white rounded-xl p-6 w-80 text-center shadow-lg relative">
                        <button
                            onClick={() => setShowThankYou(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-black"
                        >
                            <X size={20} />
                        </button>
                        <h3 className="text-lg font-semibold text-indigo-600 mb-2">Thank You!</h3>
                        <p className="text-sm text-gray-700">Our team will get in touch with you soon 🙌</p>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Navbar;
