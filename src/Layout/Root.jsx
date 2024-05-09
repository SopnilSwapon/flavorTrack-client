import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="font-lato">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;