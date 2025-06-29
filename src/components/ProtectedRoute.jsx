import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const ProtectedRoute = ({ children }) => {
    const { user, isAuthLoading } = useAuth();

    if (isAuthLoading) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen space-y-3">
            <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-gray-600">Checking authentication...</p>
        </div>
    );
}

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
