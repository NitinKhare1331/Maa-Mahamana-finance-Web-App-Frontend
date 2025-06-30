import { useState } from "react";
import { createEmployee } from "../../api/createEmployee.js";
import { toast } from "react-hot-toast";

const CreateEmployeeModal = ({ onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, email, password } = formData;

        if (!username || !email || !password) {
            toast.error("All fields are required");
            return;
        }

        setIsSubmitting(true);
        try {
            await createEmployee(formData);
            toast.success("Employee created successfully");
            onSuccess();
            onClose();
        } catch (err) {
            toast.error("Failed to create employee");
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-2">
            <div className="bg-white px-4 py-6 sm:px-6 rounded-lg w-[90%] max-w-sm space-y-4 shadow-lg max-h-[90vh] overflow-y-auto">
                <h3 className="text-xl font-semibold text-indigo-600 text-center">Add New Employee</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 text-sm"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 text-sm"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 text-sm"
                    />

                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-4 py-2 rounded text-sm text-white 
                                ${isSubmitting ? "bg-indigo-300" : "bg-indigo-600 hover:bg-indigo-700"}`}
                        >
                            {isSubmitting ? "Creating..." : "Create"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEmployeeModal;
