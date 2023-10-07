import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('services.json')
            },
            {
                path: '/service/:serviceId',
                element: <ServiceDetail></ServiceDetail>,
                loader: () => fetch('../services.json')
            }
        ]
    }
])
export default router;