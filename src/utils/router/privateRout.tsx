import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook";



const PrivateRout = () => {
    const auth = useAuth()
    console.log(auth)
    return (
        auth ? <Outlet /> : <Navigate to='login' />
    );
};

export default PrivateRout;