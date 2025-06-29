import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import GetACallModal from "../GetACallModal.jsx";
import Logo from "../../assets/logo.png"

const HomeNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
    });

    const [clicked, setClicked] = useState(false);

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
                    <img
                        src={Logo}
                        alt="Maa Mahamana Finance Logo"
                        className="h-10 w-auto object-contain"
                    />

                    {/* Desktop Menu */}

                    <div className="hidden md:flex items-center gap-4 ml-auto">

                        {/* Renew Policy Dropdown */}
                        <div className="relative group">
                            <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                            >
                            Our Products
                            </motion.button>
                            <div className="absolute left-0 top-full mt-2 w-44 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50">
                                <ul className="text-sm text-gray-700 py-2">
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Credit Card</li>
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Personal Loan</li>
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Home Loan</li>
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Car Loan</li>
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Loan Against Property</li>
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Insurance</li>
                                </ul>
                            </div>
                        </div>


                        {/* Renew Policy Dropdown */}
                        <div className="relative group">
                            <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                            >
                            Renew Policy
                            </motion.button>
                            <div className="absolute left-0 top-full mt-2 w-52 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50">
                                <ul className="text-sm text-gray-700 py-2">
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Term Life Renewal</li>
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Investment Renewal</li>
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Health Renewal</li>
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Motor Renewal</li>
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Two Wheeler Renewal</li>
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Home Insurance Renewal</li>
                                </ul>
                            </div>
                        </div>

                        {/* Claim Dropdown */}
                        <div className="relative group">
                            <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                            >
                            Claim
                            </motion.button>
                            <div className="absolute left-0 top-full mt-2 w-40 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50">
                                <ul className="text-sm text-gray-700 py-2">
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">File a new claim</li>
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Claim already filed</li>
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Track claim</li>
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Know more</li>
                                </ul>
                            </div>
                        </div>

                        {/* Supprt Dropdown */}
                        <div className="relative group">
                            <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                            >
                            Support
                            </motion.button>
                            <div className="absolute left-0 top-full mt-2 w-60 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50">
                                <ul className="text-sm text-gray-700 py-2">
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Contact us at <div><b>+91 XXXXXXXXXX</b></div></li>
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">OR</li>
                                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">Email us at <div><b>support@mahamayafinance.in</b></div></li>
                                </ul>
                            </div>
                        </div>

                        {/* Get a Call */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setShowForm(true)}
                            className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                        >
                            Get a Call
                        </motion.button>

                        {/* Account */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            animate={clicked ? { scale: 0.9, opacity: 0 } : {}}
                            transition={{ duration: 0.4 }}
                            className="border bg-indigo-600 text-white px-4 py-1 rounded-full text-sm"
                        >
                            Account
                        </motion.button>
                        </div>


                    {/* Mobile Menu Toggle Button */}
                    <motion.button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden"
                        whileTap={{ scale: 0.9 }}
                        animate={{ rotate: menuOpen ? 180 : 0, opacity: menuOpen ? 0.8 : 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {menuOpen ? <X size={34} /> : <Menu size={34} />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden px-4 pb-4 flex flex-col gap-2">

                        {/* Our Products */}
                        <button
                        className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                        >
                        Our Products
                        </button>

                        {/* Renew Policy */}
                        <button
                        className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                        >
                        Renew Policy
                        </button>

                        {/* Claim */}
                        <button
                        className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                        >
                        Claim
                        </button>

                        {/* Support */}
                        <button
                        className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                        >
                        Support
                        </button>

                        {/* Get a Call */}
                        <button
                        className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm"
                        onClick={() => {
                            setShowForm(true);
                            setMenuOpen(false);
                        }}
                        >
                        Get a Call
                        </button>

                        {/* Account */}
                        <button
                        className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm"
                        >
                        Account
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

export default HomeNavbar;
