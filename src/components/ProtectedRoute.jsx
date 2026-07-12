import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
function ProtectedRoute({ children }) {
    const { isLoggedIn, authLoading } = useSelector((state) => state.client);
    const location = useLocation();
    if (authLoading) {
        return null;
    }
    if (!isLoggedIn) {
        return (
            <Navigate to="/login" state={{ from: location }}/>
        );
    }
    return children;
}

export default ProtectedRoute;