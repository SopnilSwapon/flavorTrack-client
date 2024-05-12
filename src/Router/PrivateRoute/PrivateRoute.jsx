import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect } from "react";

const PrivateRoute = ({children}) => {
    const {loading, user} = useAuth();
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(!user && !loading){
            navigate('/signin')
        }
    },[user, loading, navigate])
    if(loading){
        return  <div className="w-full mx-auto flex pt-24 min-h-[calc(100vh-277px)] justify-center">
            <span className="loading loading-spinner loading-lg mx-auto text-pink-500 text-center"></span>
        </div>
    }
   
    // if(user){
        return children;
    // }
    // return navigate('/signin')
};

export default PrivateRoute;