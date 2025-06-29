import { FaChartLine, FaPercent, FaMoneyBill } from "react-icons/fa";

const KPIs = [
    {
        icon: FaChartLine,
        label: "Net Profit",
        value: "₹25.4L",
        trend: "+12%",
        trendLabel: "vs last month",
        color: "green",
    },
    {
        icon: FaPercent,
        label: "Expense Ratio",
        value: "18%",
        trend: "-3%",
        trendLabel: "vs last quarter",
        color: "red",
    },
    {
        icon: FaMoneyBill,
        label: "AUM",
        value: "₹5.3Cr",
        trend: "+8%",
        trendLabel: "vs last year",
        color: "green",
    },
];

const KpiSection =() => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-auto max-w-7xl mb-10">
            {KPIs.map((kpi, idx) => (
                <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-gray-400 shadow-md flex items-center gap-4"
                >
                <div
                    className={`p-3 rounded-full bg-${kpi.color}-100 text-${kpi.color}-600`}
                >
                    <kpi.icon className="text-xl" />
                </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-500">{kpi.label}</p>
                        <p className="text-xl font-bold text-gray-900">{kpi.value}</p>
                        <div className="text-xs mt-1 text-gray-500 flex items-center gap-1">
                        <span className={`font-medium text-${kpi.color}-600`}>
                            {kpi.trend}
                        </span>
                        <span>{kpi.trendLabel}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default KpiSection;
