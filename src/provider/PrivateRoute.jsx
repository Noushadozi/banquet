import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    
    if (!user) {
        <Navigate to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;