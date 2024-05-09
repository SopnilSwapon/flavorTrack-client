import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <div className="flex gap-4 font-bold">
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink><li>All Foods</li></NavLink>
        <NavLink><li>Gallery</li></NavLink>
    </div>
    return (
        <div className="navbar bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400 rounded text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl flex gap-0">Flavor<span className="text-pink-400">TracK</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                My added food items
                            </a>
                        </li>
                        <li><a>Add a food item</a></li>
                        <li><a>My ordered food items</a></li>
                    </ul>
                </div>
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;