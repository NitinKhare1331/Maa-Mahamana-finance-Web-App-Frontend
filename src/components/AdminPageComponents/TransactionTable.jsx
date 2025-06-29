import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { format } from "date-fns";

const TransactionsTable = () => {
    const transactions = [
        {
            id: 1,
            name: "Payment Received",
            amount: "+ ₹8,000",
            date: "2025-06-25",
            type: "Credit",
        },
        {
            id: 2,
            name: "Office Rent",
            amount: "- ₹12,000",
            date: "2025-06-24",
            type: "Debit",
        },
        {
            id: 3,
            name: "Subscription",
            amount: "- ₹999",
            date: "2025-06-22",
            type: "Debit",
        },
        {
            id: 4,
            name: "Salary Credited",
            amount: "- ₹60,000",
            date: "2025-06-20",
            type: "Debit",
        },
    ];

    return (
        <div className="bg-white p-4 rounded-xl shadow-md overflow-x-auto max-w-7xl md:mx-auto mx-4 mb-10">
            <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
                <table className="w-full text-sm text-left min-w-[600px]">
                    <thead>
                    <tr className="text-gray-500 border-b">
                        <th className="py-2">#</th>
                        <th className="py-2">Description</th>
                        <th className="py-2">Amount</th>
                        <th className="py-2">Type</th>
                        <th className="py-2">Date</th>
                        <th className="py-2 text-right">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map((txn) => (
                        <tr key={txn.id} className="border-b hover:bg-gray-50">
                        <td className="py-2">{txn.id}</td>
                        <td className="py-2">{txn.name}</td>
                        <td className="py-2 flex items-center gap-2 text-sm font-medium">
                            {txn.type === "Credit" ? (
                            <FaArrowDown className="text-green-500" />
                            ) : (
                            <FaArrowUp className="text-red-500" />
                            )}
                            <span className={txn.amount.startsWith("+") ? "text-green-600" : "text-red-500"}>
                            {txn.amount}
                            </span>
                        </td>
                        <td className="py-2">
                            <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                txn.type === "Credit"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                            >
                            {txn.type}
                            </span>
                        </td>
                        <td className="py-2">
                            {format(new Date(txn.date), "MMMM d, yyyy")}
                        </td>
                        <td className="py-2 text-right">
                            <button className="text-blue-600 hover:underline text-sm">View</button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        </div>
    );
}

export default TransactionsTable;
