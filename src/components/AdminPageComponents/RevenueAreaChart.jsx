import Chart from "react-apexcharts";

const RevenueAreaChart = () => {
    const series = [
        {
            name: "Revenue",
            data: [31000, 40000, 28000, 51000, 42000, 60000, 52000],
        },
        {
            name: "Expenses",
            data: [18000, 25000, 20000, 30000, 26000, 35000, 30000],
        },
    ];

    const options = {
        chart: {
            type: "area",
            height: 350,
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        dataLabels: { enabled: false },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.1,
                stops: [0, 90, 100],
            },
        },
        xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
                style: {
                    fontSize: "12px",
                    colors: "#6B7280",
                },
            },
        },
        yaxis: {
            labels: {
                formatter: (val) => `₹${val / 1000}k`,
                style: { fontSize: "12px", colors: "#6B7280" },
            },
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
            fontSize: "14px",
            markers: { radius: 12 },
        },
        tooltip: {
            theme: "light",
            y: {
                formatter: (val) => `₹${val.toLocaleString()}`,
            },
        },
        colors: ["#3b82f6", "#ef4444"],
        grid: {
            strokeDashArray: 4,
            borderColor: "#E5E7EB",
        },
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Financial Overview</h2>
            <Chart options={options} series={series} type="area" height={320} />
        </div>
    );
};

export default RevenueAreaChart;
