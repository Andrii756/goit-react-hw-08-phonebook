import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redux/authSlice";

export default function PrivateRoute({ children, redirectTo ="/login" }) { 
    const isLoggedIn = useSelector(getIsLoggedIn);
    return isLoggedIn ? children : <Navigate to={redirectTo} />;
}