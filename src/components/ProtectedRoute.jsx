import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
function ProtectedRoute({ children }) {
    const { isLoggedIn } = useSelector((state) => state.client);
    const location = useLocation();
    if (!isLoggedIn) {
        return (
            <Navigate to="/login" state={{ from: location }}/>
        );
    }
    return children;
}

export default ProtectedRoute;