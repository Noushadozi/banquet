import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="grid lg:grid-cols-10">
            <div className="col-span-1">1</div>
            <div className="col-span-8">
                <Outlet></Outlet>
            </div>
            <div className="col-span-1">3</div>
        </div>
    );
};

export default Root;