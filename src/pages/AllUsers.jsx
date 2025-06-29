import { useEffect, useState } from "react";
import { getAllUsers } from "../api/getAllUsers.js";
import { FaUserCircle } from "react-icons/fa";

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const data = await getAllUsers();
            setUsers(data);
        } catch (err) {
            console.error("Failed to fetch users:", err);
        }
        };
        fetchUsers();
    }, []);

    return (
        <div className="bg-gradient-to-br from-indigo-300 via-blue-200 to-violet-300 min-h-screen py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-indigo-700 mb-8 text-center">
                    All Users
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {users.map((user, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4"
                    >
                        <FaUserCircle className="text-4xl text-indigo-500" />

                        <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                            {user.username}
                        </h3>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
