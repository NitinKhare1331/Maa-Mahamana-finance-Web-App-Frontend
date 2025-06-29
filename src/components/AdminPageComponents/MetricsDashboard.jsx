import MetricsCard from "./MetricsCard.jsx";
import { FaChartLine, FaEye, FaUserFriends, FaSignOutAlt } from "react-icons/fa";

const MetricsDashboard = () => {
    const metrics = [
        {
            title: "Total Visits",
            value: "12,430",
            change: "+10%",
            color: "text-green-500 bg-green-500",
            Icon: FaChartLine,
            trend: "up",
        },
        {
            title: "Total Page Views",
            value: "34,210",
            change: "-7%",
            color: "text-red-500 bg-red-500",
            Icon: FaEye,
            trend: "down",
        },
        {
            title: "Unique Visitors",
            value: "9,580",
            change: "~12%",
            color: "text-purple-500 bg-purple-500",
            Icon: FaUserFriends,
            trend: "down",
        },
        {
            title: "Bounce Rate",
            value: "33%",
            change: "+3%",
            color: "text-blue-500 bg-blue-500",
            Icon: FaSignOutAlt,
            trend: "up",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-20 max-w-7xl mx-auto">
            {metrics.map((metric, index) => (
                <MetricsCard key={index} {...metric} />
            ))}
        </div>
    );
}

export default MetricsDashboard;
