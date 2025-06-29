const CashFlowSummary = () => {
    const inflow = 85000;
    const outflow = 65000;
    const net = inflow - outflow;

    return (
        <div className="bg-white border border-gray-400 p-4 rounded-xl shadow-md grid grid-cols-3 gap-4 text-center max-w-7xl mx-4 md:mx-auto mb-10">
            <div>
                <p className="text-gray-500 text-sm">Inflows</p>
                <p className="text-green-600 font-semibold text-xl">₹{inflow.toLocaleString()}</p>
            </div>
            <div>
                <p className="text-gray-500 text-sm">Outflows</p>
                <p className="text-red-500 font-semibold text-xl">₹{outflow.toLocaleString()}</p>
            </div>
            <div>
                <p className="text-gray-500 text-sm">Net Cash</p>
                <p className={`font-semibold text-xl ${net >= 0 ? "text-green-600" : "text-red-600"}`}>
                ₹{net.toLocaleString()}
                </p>
            </div>
        </div>
    );
}

export default CashFlowSummary;
