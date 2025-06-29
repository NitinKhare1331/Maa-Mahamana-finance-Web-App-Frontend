import Chart from "react-apexcharts";

const ExpenseBarChart = () => {
    const series = [
        {
            name: "Expenses",
            data: [12000, 18000, 10000, 15000, 13000],
        },
    ];

    const options = {
        chart: {
            type: "bar",
            height: 350,
            toolbar: { show: false },
            fontFamily: "Inter, sans-serif",
        },
        plotOptions: {
            bar: {
                borderRadius: 8,
                columnWidth: "50%",
                dataLabels: {
                    position: "top",
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: (val) => `₹${val / 1000}k`,
            offsetY: -12,
            style: {
                fontSize: "12px",
                colors: ["#6B7280"],
            },
        },
        xaxis: {
            categories: ["Operations", "Compliance", "Advisory", "Marketing", "IT Systems"],
            axisTicks: { show: false },
            axisBorder: { show: false },
            labels: {
                style: {
                    fontSize: "13px",
                    colors: "#4B5563",
                },
            },
        },
        yaxis: {
            labels: {
                formatter: (val) => `₹${val / 1000}k`,
                style: {
                    fontSize: "12px",
                    colors: "#6B7280",
                },
            },
        },
        tooltip: {
            y: {
                formatter: (val) => `₹${val.toLocaleString()}`,
            },
        },
        grid: {
            borderColor: "#E5E7EB",
            strokeDashArray: 4,
        },
        colors: ["#ef4444"],
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Department-wise Expenses</h2>
            <Chart options={options} series={series} type="bar" height={320} />
        </div>
    );
};

export default ExpenseBarChart;
