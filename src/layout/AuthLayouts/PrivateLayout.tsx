import { useContext } from "react";
import { LoginedUserContext } from "../../context/users.context";
import { Navigate, Outlet } from "react-router-dom";


export function PrivateLayout() {
    const { loginedUser, loading } = useContext(LoginedUserContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!loginedUser) {
        return <Navigate to={'/login'} replace />
    }

    return <Outlet />
    
}