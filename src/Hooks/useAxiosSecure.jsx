import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
    baseURL: 'https://flavortrack-server.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate()
    axiosSecure.interceptors.response.use(res =>{
        return res
    }, error =>{
        console.log('error tracked in the interceptors', error.response);
        if(error.response.status === 401 || error.response.status === 403){
            console.log('kick the user');
            logOut()
            .then(() => {
                navigate('/signin')
                Swal.fire({
                    icon: "error",
                    title: "logOut for forbidden access",
                });
            })
        }
    })
     return axiosSecure
};

export default useAxiosSecure;