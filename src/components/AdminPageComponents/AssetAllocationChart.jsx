import Chart from "react-apexcharts";

const AssetAllocationChart = () => {

    const series1 = [60, 20, 15, 5];
    const options1 = {
        chart: { type: "donut" },
        labels: ["Active", "Repaid", "Overdue", "Defaulted"],
        colors: ["#10b981", "#3b82f6", "#f97316", "#ef4444"],
        legend: { position: "bottom" },
        dataLabels: {
        enabled: true,
        formatter: (val) => `${val.toFixed(1)}%`,
        },
    };

    const series2 = [35, 30, 25, 10];
    const options2 = {
        chart: { type: "donut" },
        labels: ["Personal Loans", "Business Loans", "Home Loans", "Vehicle Loans"],
        colors: ["#3b82f6", "#f97316", "#10b981", "#eab308"],
        legend: { position: "bottom" },
        dataLabels: {
        enabled: true,
        formatter: (val) => `${val.toFixed(1)}%`,
        },
    };

    return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-10 max-w-6xl mx-auto mt-6">


        <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2">Asset Allocation (Corporate Portfolio)</h2>
            <Chart options={options1} series={series1} type="donut" height={300} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2">Client Investment Breakdown</h2>
            <Chart options={options2} series={series2} type="donut" height={300} />
        </div>
        </div>
    );
};

export default AssetAllocationChart;
