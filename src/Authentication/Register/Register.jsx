import { Link, useNavigate } from "react-router-dom";
import regPic from '../../assets/login.jpg'
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";

const Register = () => {
    const {createUser} = useAuth();
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password =form.password.value;
        const user = {name, email, photo};
        // console.log(createUser);
        createUser(email, password)
        .then(result => {
          fetch('https://flavortrack-server.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
           })
           .then(res=>res.json())
           .then(data =>{
            console.log('come', data);
           })
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo
          })
            console.log(result.user);
           navigate('/')
            Swal.fire({
              icon: "success",
              title: "Registration Successful",
            });
            

        })
        .catch(error=> {
            console.log(error.message);
            Swal.fire({
              icon: "error",
              title: "give valid email & password",
            });
        })

    }
    return (
        <div className="hero pt-24 mb-20 bg-base-200">
          <Helmet>
          <title>FlavorTrack||Register</title>
          </Helmet>
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center mr-12 w-1/2 lg:text-left">
            <img src={regPic} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center pt-3 font-bold">Sign Up</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="email" name='photo' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
               <input className="btn bg-gradient-to-r from-indigo-400 from-10% via-sky-600 via-30% to-emerald-500 to-90% text-white" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='text-center border'>Have an account ?<Link to='/signin' className='font-bold text-indigo-500'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;