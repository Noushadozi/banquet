import { Link, Outlet } from "react-router-dom";
import Foooter from "../pages/Shared/Foooter/Foooter";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-10">

                <div className="col-span-1 hidden md:block">
                    <img src="header-logo-light.png" alt="" />
                    <div className="sticky rotate-90 top-[50%]"><Link to="/about" className=" cursor-pointer text-[#9E9A94] text-[11px] font-thin tracking-[10px] whitespace-nowrap">ABOUT US</Link></div>
                </div>

                <div className="col-span-8 border-x">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>

                <div className="col-span-1 static hidden sm:block">
                    <div className="sticky rotate-90 top-[50%]"><a className=" cursor-pointer text-[#9E9A94] text-[11px] font-thin tracking-[7px] whitespace-nowrap">CONTACT US</a></div>
                </div>
            </div>
            <Foooter></Foooter>
            <ToastContainer />
        </div>
    );
};

export default Root;