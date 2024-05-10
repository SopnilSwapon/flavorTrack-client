import { Link } from 'react-router-dom';
import loginPic from '../../assets/login.jpg'
import useAuth from '../../Hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const {login, googleLogin} = useAuth();
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        login(email, password)
        .then(res => {
            console.log(res.user);
            alert('login successful')
        })
        .catch(error => {
            console.error(error.message)
        })

    }
    // const handleGoogleLogin = () => {
    //      googleLogin()
    //      .then(res => {
    //         console.log(res.user);
    //         alert('login by google successful')
    //      })
    //      .catch(error => {
    //         console.error(error.message)
    //      })
    // }
    return (
        <div className="hero mb-20 bg-base-200">
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
              <input className="btn bg-[#ff3811] text-white" type="submit" value="Login" />
              </div>
              <div>
                <p className='text-center'>Social Login</p>
                <p className='text-3xl flex mt-2 justify-center'><FcGoogle onClick={handleGoogleLogin}></FcGoogle></p>
              </div>
            </form>
            <p className='text-center border'>New to this <Link className='font-bold text-orange-600' to='/signup'>Sign Up</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;