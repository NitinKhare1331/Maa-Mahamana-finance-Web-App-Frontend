import { useEffect, useState } from "react";
import { getAllEmployees } from "../api/getAllEmployees.js";
import { deleteEmployeeById } from "../api/deleteEmployee.js";
import { updateEmployeeById } from "../api/updateEmployee.js";
import { FaUserTie, FaTrashAlt, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import CreateEmployeeModal from "../components/AdminPageComponents/createEmployeeModal.jsx";


const Allemployees = () => {
    const [employees, setEmployees] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editUsername, setEditUsername] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [showCreateModal, setShowCreateModal] = useState(false);


    const fetchEmployees = async () => {
        try {
            const data = await getAllEmployees();
            setEmployees(data);
        } catch (err) {
            console.error("Failed to fetch employees:", err);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this employee?")) {
            try {
                await deleteEmployeeById(id);
                setEmployees((prev) => prev.filter((emp) => emp._id !== id));
            } catch (err) {
                alert("Failed to delete employee");
            }
        }
    };

    const handleUpdate = async (id) => {
        try {
            await updateEmployeeById(id, {
                username: editUsername,
                email: editEmail,
            });

            setEmployees((prev) =>
                prev.map((employee) =>
                    employee._id === id ? { ...employee, username: editUsername, email: editEmail } : employee
                )
            );
            setEditId(null);
        } catch (err) {
            alert("Failed to update employee");
        }
    };

    return (
        <div className="bg-gradient-to-br from-indigo-300 via-blue-200 to-violet-300 min-h-screen py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-indigo-700 mb-8 text-center">
                    All Employees
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {employees.map((employee) => (
                        <div
                            key={employee._id}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative space-y-2"
                        >
                            <FaUserTie className="text-4xl text-indigo-500 mb-2" />

                            {editId === employee._id ? (
                                <div className="space-y-2">
                                    <input
                                        value={editUsername}
                                        onChange={(e) => setEditUsername(e.target.value)}
                                        className="w-full border rounded px-3 py-1 text-sm"
                                        placeholder="Username"
                                    />
                                    <input
                                        value={editEmail}
                                        onChange={(e) => setEditEmail(e.target.value)}
                                        className="w-full border rounded px-3 py-1 text-sm"
                                        placeholder="Email"
                                    />

                                    <div className="flex justify-end gap-2 pt-1">
                                        <button
                                            onClick={() => handleUpdate(employee._id)}
                                            className="text-green-600 hover:text-green-800"
                                            title="Save"
                                        >
                                            <FaSave />
                                        </button>
                                        <button
                                            onClick={() => setEditId(null)}
                                            className="text-gray-500 hover:text-gray-700"
                                            title="Cancel"
                                        >
                                            <FaTimes />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {employee.username}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {employee.email}
                                    </p>
                                </>
                            )}

                            <div className="absolute top-3 right-3 flex gap-2">
                                <button
                                    onClick={() => {
                                        setEditId(employee._id);
                                        setEditUsername(employee.username);
                                        setEditEmail(employee.email);
                                    }}
                                    className="text-indigo-500 hover:text-indigo-700"
                                    title="Edit Employee"
                                >
                                    <FaEdit />
                                </button>

                                <button
                                    onClick={() => handleDelete(employee._id)}
                                    className="text-red-500 hover:text-red-700"
                                    title="Delete Employee"
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showCreateModal && (
                <CreateEmployeeModal
                    onClose={() => setShowCreateModal(false)}
                    onSuccess={fetchEmployees}
                />
            )}

            <button
                onClick={() => setShowCreateModal(true)}
                className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition"
                title="Add Employee"
            >
                <FaPlus />
            </button>

        </div>
    );
};

export default Allemployees;
