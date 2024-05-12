import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {loading, user} = useAuth();
    const navigate = useNavigate()
    if(loading){
        return  <span className="loading loading-spinner loading-lg text-error"></span>
    }
    if(user){
        return children;
    }
    return navigate('/signin')
};

export default PrivateRoute;