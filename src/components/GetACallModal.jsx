import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { customerQuery } from "../api/query.js";
import { toast } from "react-hot-toast";

const GetACallModal = ({ showForm, onClose, formData, setFormData }) => {
    const modalRef = useRef(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const handleEscape = (e) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    const handleBackdropClick = (e) => {
      if (e.target === modalRef.current) onClose();
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      const mobilePattern = /^\d{10}$/;
      if (!mobilePattern.test(formData.mobile)) {
        toast.error("Mobile number must be exactly 10 digits.");
        setLoading(false);
        return;
      }

      try {
        await customerQuery({
          username: formData.name,
          email: formData.email,
          mobile: formData.mobile,
        });

        setFormData({ name: "", email: "", mobile: "" });
        toast.success("Query submitted successfully!");
        localStorage.setItem("showThankYou", "true");
        onClose();
        
      } catch (error) {
        console.error("Query error:", error);
        toast.error("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (!showForm) return null;

    return (
      <motion.div
        ref={modalRef}
        onClick={handleBackdropClick}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-10 bg-black bg-opacity-40 flex justify-center items-center"
      >
        <div className="bg-white rounded-xl p-6 w-80 relative shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <h2 className="text-lg font-semibold text-indigo-600 mb-4">
            Request a Call Back
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="border rounded px-3 py-2 text-sm"
            />

            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="border rounded px-3 py-2 text-sm"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              required
              value={formData.mobile}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, mobile: e.target.value }))
              }
              className="border rounded px-3 py-2 text-sm"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white rounded px-4 py-2 text-sm mt-2 hover:bg-indigo-700 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </motion.div>
    );
};

export default GetACallModal;
