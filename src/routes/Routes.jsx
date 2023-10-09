import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('services.json')
            },
            {
                path: '/service/:serviceId',
                element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
                loader: () => fetch('../services.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    }
])
export default router;