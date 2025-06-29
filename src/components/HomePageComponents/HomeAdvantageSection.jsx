import { motion } from "framer-motion";
import { Clock, ShieldCheck, UserCheck, MessageCircle } from "lucide-react";

const benefits = [
    {
        icon: <Clock size={36} className="text-indigo-600 mb-3" />,
        title: "Instant Approvals",
        subtitle: "Get loans approved in minutes",
    },
    {
        icon: <UserCheck size={36} className="text-indigo-600 mb-3" />,
        title: "Expert Guidance",
        subtitle: "Talk to certified finance advisors",
    },
    {
        icon: <ShieldCheck size={36} className="text-indigo-600 mb-3" />,
        title: "Data Security",
        subtitle: "End-to-end encrypted processes",
    },
    {
        icon: <MessageCircle size={36} className="text-indigo-600 mb-3" />,
        title: "24/7 Support",
        subtitle: "We’re here to help you anytime",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
        },
    }),
};

const HomeAdvantageSection = () => {

    return (
        <section className="px-6 py-20 text-gray-800">
            <div className="max-w-[1140px] mx-auto">
                <h2 className="text-3xl font-bold mb-4 border-l-4 border-indigo-600 pl-3">
                Why Choose Us?
                </h2>
                <p className="text-gray-600 max-w-xl">
                We're more than just a finance company. From personal and home loans to insurance and expert advice — we're here to support your financial journey.
                </p>
                <a
                href="#learn-more"
                className="text-indigo-600 mt-2 inline-block font-medium hover:underline"
                >
                Learn more
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {benefits.map((item, index) => (
                    <motion.div
                    key={index}
                    className="text-center border rounded-xl p-6 shadow bg-gray-50 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={index}
                    >
                    {item.icon}
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                    </motion.div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default HomeAdvantageSection;
