import { Outlet } from "react-router-dom";
import Foooter from "../pages/Shared/Foooter/Foooter";

const Root = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-10">
                <div className="col-span-1">1</div>
                <div className="col-span-8">
                    <Outlet></Outlet>
                </div>
                <div className="col-span-1">3</div>
            </div>
            <Foooter></Foooter>
        </div>
    );
};

export default Root;