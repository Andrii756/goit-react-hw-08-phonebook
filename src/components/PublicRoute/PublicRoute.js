import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redux/authSlice";

export function PublicRoute({ children, restricted = false, redirectTo="/" }) { 
    const isLoggedIn = useSelector(getIsLoggedIn);
    const shoulRedirect = isLoggedIn && restricted;
    return shoulRedirect ? <Navigate to={redirectTo} /> : children;
}