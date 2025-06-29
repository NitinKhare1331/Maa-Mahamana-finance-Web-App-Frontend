import { useEffect, useState } from "react";
import { getAllqueries } from "../api/query.js";
import { FaRegCommentDots } from "react-icons/fa";

const AllQueries = () => {
    const [queries, setqueries] = useState([]);

    useEffect(() => {
        const fetchqueries = async () => {
        try {
            const data = await getAllqueries();
            setqueries(data);
        } catch (err) {
            console.error("Failed to fetch queries", err);
        }
        };
        fetchqueries();
    }, []);

    return (
        <div className="bg-gradient-to-br from-indigo-300 via-blue-200 to-violet-300 min-h-screen py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-indigo-700 mb-8 text-center">
                    All Queries
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {queries.map((query, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4"
                    >
                        <FaRegCommentDots className="text-4xl text-indigo-500 mt-1" />

                        <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                            {query.username}
                        </h3>
                        <p className="text-sm text-gray-600">{query.email}</p>
                        <p className="text-sm text-gray-600">{query.mobile}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        );
    };

export default AllQueries;;
