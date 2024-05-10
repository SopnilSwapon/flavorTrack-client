import { Link } from 'react-router-dom';
import loginPic from '../../assets/login.jpg'
import useAuth from '../../Hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2'
const Login = () => {
    const {login, googleLogin} = useAuth();
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(res => {
            console.log(res.user);
            Swal.fire({
              icon: "success",
              title: "Login Successful",
            });
        })
        .catch(error => {
            console.error(error.message);
            Swal.fire({
              icon: "error",
              title: "You have wrong email & password",
            });
        })

    }
    const handleGoogleLogin = () => {
     console.log(googleLogin);
     googleLogin()
     .then(result => {
      console.log(result.user);
      console.log('success');
     })
     .catch(error => {
      console.error(error);
     })
    }
   
    return (
        <div className="hero pt-20 mb-20 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={loginPic} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center pt-3 font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
              <input className="btn bg-gradient-to-r from-indigo-400 from-10% via-sky-600 via-30% to-emerald-500 to-90% text-white" type="submit" value="Login" />
              </div>
              <div>
                <p className='text-center'>Social Login</p>
             
              </div>
            </form>
            <p className='text-3xl flex mt-2 justify-center'><FcGoogle onClick={handleGoogleLogin}></FcGoogle></p>
            <p className='text-center border'>New to this <Link className='font-bold text-orange-600' to='/signup'>Sign Up</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;