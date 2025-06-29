import { motion } from "framer-motion";

const MetricsCard = ({ title, value, change, color, Icon, trend }) => {
    return (
    <motion.div
        className="flex flex-col justify-between bg-white rounded-xl shadow-md p-5 min-w-[150px] space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        >
            <div className="flex items-center justify-between">
                <div>
                <div className="text-gray-600 font-medium text-sm">{title}</div>
                <div className="mt-1 text-2xl font-bold text-gray-900">{value}</div>
                </div>
                <div className={`p-2 rounded-full bg-opacity-10 ${color}`}>
                <Icon className={`text-xl`} />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className={`text-sm font-semibold`}>
                {change} {trend === "up" ? "↑" : trend === "down" ? "↓" : ""}
                </div>
                <div className="text-xs text-gray-400">
                Compared to last week
                </div>
            </div>
        </motion.div>
    );
}

export default MetricsCard;
