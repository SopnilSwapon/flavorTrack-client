import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import PropTypes from 'prop-types'
const PrivateRoute = ({children}) => {
    const {loading, user} = useAuth();
    // const navigate = useNavigate();
    const location = useLocation();
    
    // useEffect(()=>{
        if(!user && !loading){
            // navigate('/signin')
            return <Navigate state={location.pathname} to='/signin'></Navigate>
        }
    // },[user, loading])
    if(loading){
        return  <div className="w-full mx-auto flex pt-24 min-h-[calc(100vh-277px)] justify-center">
            <span className="loading loading-spinner loading-lg mx-auto text-pink-500 text-center"></span>
        </div>
    }
   
        return children;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}