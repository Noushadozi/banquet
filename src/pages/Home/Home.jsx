import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Companies from "./Companies";
import Services from "./Services";
import Request from "./Request";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Banquet | Home</title>
            </Helmet>
            <Banner></Banner>
            <Companies></Companies>
            <Services
                services={services}
            ></Services>
            <Request></Request>
        </div>
    );
};

export default Home;