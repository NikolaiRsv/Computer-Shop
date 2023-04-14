import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../../contexts/authContext.js"; 

export const RouteGuard = ({
    children,
}) => {
    const { isAuthenticated } = useAuthContext();
    
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />
};