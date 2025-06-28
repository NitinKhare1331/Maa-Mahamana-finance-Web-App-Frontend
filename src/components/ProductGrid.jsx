import { motion } from "framer-motion";
import { FaCreditCard, FaMoneyBillWave, FaBuilding, FaCar, FaHome, FaSyncAlt, FaWallet, FaBolt, FaCoins, FaHeartbeat, FaUmbrella } from "react-icons/fa";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 },
    }),
};

const products = [
    {
        label: "Best Offer",
        title: "Credit Cards",
        desc: "Choose from 50+ cards that match your financial goals.",
        callToAction: "Get Best Offers",
        icon: <FaCreditCard className="text-3xl text-yellow-400" />,
    },
    {
        label: "Cashback Offer",
        title: "Mahamana Personal Loan",
        desc: "Wide range of personal loans from trusted banks & NBFCs.",
        callToAction: "Check Eligibility",
        icon: <FaMoneyBillWave className="text-3xl text-green-600" />,
    },
    {
        label: "Cashback Offer",
        title: "Mahamana Business Loan",
        desc: "Boost your business with low-interest loan options.",
        callToAction: "Check Eligibility",
        icon: <FaBuilding className="text-3xl text-gray-600" />,
    },
    {
        label: "Best Offer",
        title: "Mahamana Home Loan",
        desc: "Get home loans with the lowest interest rates.",
        callToAction: "Check Eligibility",
        icon: <FaHome className="text-3xl text-pink-500" />,
    },
    {
        title: "Loan Against Property",
        desc: "Use your property to get liquidity at the best rates.",
        callToAction: "Check Eligibility",
        icon: <FaBuilding className="text-3xl text-gray-600" />,
    },
    {
        title: "Transfer Home Loan",
        desc: "Switch your home loan to get better interest rates.",
        callToAction: "Reduce Your EMI",
        icon: <FaSyncAlt className="text-3xl text-gray-400" />,
    },
    {
        title: "Loan Against Car",
        desc: "Secure a loan using your car at low interest rates.",
        callToAction: "Know More",
        icon: <FaCar className="text-3xl text-blue-900" />,
    },
    {
        title: "Mahamana Money",
        desc: "Track and save more with smart financial insights.",
        callToAction: "Track Now",
        icon: <FaWallet className="text-3xl text-black" />,
    },
    {
        label: "Cashback Offer",
        title: "Working Capital Loan",
        desc: "Daily business expenses? We've got you covered.",
        callToAction: "Check Eligibility",
        icon: <FaCoins className="text-3xl text-yellow-400" />,
    },
    {
        label: "Cashback Offer",
        title: "Bill Payments",
        desc: "Pay EMIs, credit card bills, and utilities easily.",
        callToAction: "Pay Now",
        icon: <FaBolt className="text-3xl text-indigo-600" />,
    },
];

const Insurances = [
    {
        label: "Upto 20% off",
        title: "Health Insurance",
        desc: "Protect yourself and your family against medical expenses.",
        callToAction: "Starting @8/day*",
        icon: <FaHeartbeat className="text-3xl text-red-600" />,
    },
    {
        label: "Upto 15% off",
        title: "Term Life Insurance",
        desc: "Safegaurd your loved ones from future uncertainities.",
        callToAction: "Starting from @699/month*",
        icon: <FaUmbrella className="text-3xl text-orange-600" />,
    },
    {
        label: "New",
        title: "Car Insurance",
        desc: "Protect yourself and your car from financial emergencies.",
        callToAction: "View Prices",
        icon: <FaCar className="text-3xl text-blue-900" />,
    }
]

const ProductGrid = () => {
    return (
        <div className="max-w-7xl mx-auto mt-8 px-4 py-10">

            {/* Products */}
            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl font-bold text-indigo-600 mb-6 border-b-2 border-indigo-600 w-fit"
            >
                Popular Products
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((item, i) => (
                <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-xl p-5 border hover:border-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                    {item.label && (
                    <div className="text-xs bg-green-100 text-green-700 w-fit px-2 py-0.5 rounded mb-2 font-medium">
                        {item.label}
                    </div>
                    )}
                    <div className="flex items-start gap-4">
                    {item.icon}
                    <div>
                        <h3 className="text-md font-semibold text-gray-800">
                        {item.title.toUpperCase()}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                        <a
                        href="#"
                        className="text-indigo-600 mt-2 inline-block text-sm font-medium hover:underline"
                        >
                        {item.callToAction} →
                        </a>
                    </div>
                    </div>
                </motion.div>
                ))}
            </div>

            {/* Insuarance and Investment */}

            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl font-bold text-indigo-600 mb-6 border-b-2 border-indigo-600 w-fit mt-10"
            >
                Insuarance
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Insurances.map((item, i) => (
                <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-xl p-5 border hover:border-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                    {item.label && (
                    <div className="text-xs bg-green-100 text-green-700 w-fit px-2 py-0.5 rounded mb-2 font-medium">
                        {item.label}
                    </div>
                    )}
                    <div className="flex items-start gap-4">
                    {item.icon}
                    <div>
                        <h3 className="text-md font-semibold text-gray-800">
                        {item.title.toUpperCase()}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                        <a
                        href="#"
                        className="text-indigo-600 mt-2 inline-block text-sm font-medium hover:underline"
                        >
                        {item.callToAction} →
                        </a>
                    </div>
                    </div>
                </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
