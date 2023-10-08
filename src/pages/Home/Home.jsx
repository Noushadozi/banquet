import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Companies from "./Companies";
import Services from "./Services";
import Request from "./Request";
// import WhyUs from "./WhyUs";

const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Companies></Companies>
            <Services
                services={services}
            ></Services>
            <Request></Request>
            {/* <WhyUs></WhyUs> */}
        </div>
    );
};

export default Home;