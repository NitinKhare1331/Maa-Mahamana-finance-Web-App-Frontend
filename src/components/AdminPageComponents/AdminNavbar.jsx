import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/logo.png";
import AdminProfilePanel from "./AdminProfilePanel.jsx";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const [showProfilePanel, setShowProfilePanel] = useState(false);

    return (
        <>
            <nav className="bg-white shadow-md fixed top-0 w-full z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                    <img
                        src={Logo}
                        alt="Maa Mahamana Finance Logo"
                        className="h-10 w-auto object-contain cursor-pointer"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            navigate('/adminDashboard', { replace: true });
                        }}
                    />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => navigate('/admin/getallusers')}
                            className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                        >
                            View Users
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => navigate('/admin/getallemployees')}
                            className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                        >
                            View Employees
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => navigate('/admin/getallqueries')}
                            className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                        >
                            View Queries
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm"
                            onClick={() => setShowProfilePanel(true)}
                        >
                            Profile
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
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
                                setMenuOpen(false);
                                navigate('/admin/getallusers');
                            }}
                        >
                            View Users
                        </button>
                        <button
                            className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                            onClick={() => {
                                setMenuOpen(false);
                                navigate('/admin/getallemployees');
                            }}
                        >
                            View Employees
                        </button>
                        <button
                            className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                            onClick={() => {
                                setMenuOpen(false);
                                navigate('/admin/getallqueries');
                            }}
                        >
                            View Queries
                        </button>
                        <button
                            onClick={() => {
                                setMenuOpen(false);
                                setShowProfilePanel(true);
                            }}
                            className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm"
                        >
                            Profile
                        </button>
                    </div>
                )}
                {showProfilePanel && (
                    <div className="fixed inset-0 z-40 bg-opacity-10 backdrop-blur-sm">
                        <AdminProfilePanel
                            isOpen={showProfilePanel}
                            onClose={() => setShowProfilePanel(false)}
                        />
                    </div>
                )}
            </nav>
        </>
    );
};

export default AdminNavbar;
