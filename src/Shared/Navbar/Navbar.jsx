import {NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const Navbar = () => {
    const navigate = useNavigate();
    const { logOut, user } = useAuth();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/signin')
                Swal.fire({
                    icon: "success",
                    title: "successfully logOut",
                });
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const links = <div className="flex flex-col md:flex-row lg:flex-row gap-2 font-extrabold">
        <li><NavLink className='badge badge-outline flex justify-center items-center p-5' to='/'>Home</NavLink></li>
        <li><NavLink className='badge badge-outline flex justify-center items-center p-5'  to='/allfoods'>All Foods</NavLink></li>
        <li><NavLink className='badge badge-outline flex justify-center items-center p-5' to='/gallery'>Gallery</NavLink></li>
        <li><NavLink className='badge badge-outline flex justify-center items-center p-5' to='/contact'>Contact Us</NavLink></li>
    </div>
    return (
        <div className="navbar fixed z-10 bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400 rounded text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <NavLink className="badge badge-outline font-extrabold flex justify-center items-center p-5 text-xl">Flavor<span className="text-pink-400">TracK</span></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    {
                        user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                            </div>
                        </div>
                    }
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4  shadow bg-gray-400 rounded-box w-52">
                        <NavLink to='/myaddedfoods'><li>My added food items</li></NavLink>
                        <NavLink className="py-2" to='/addfooditem'><li>Add a food item</li></NavLink>
                        <NavLink to='/myorders'><li>My ordered food items</li></NavLink>
                    </ul>
                </div>
                {
                    user ? <button className='badge badge-outline flex justify-center items-center p-5 font-extrabold' onClick={handleLogOut}>LogOut</button> : <NavLink to='/signin'><button className='badge badge-outline flex justify-center items-center p-5 font-extrabold'>Login</button></NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;