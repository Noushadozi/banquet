import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner";
import Companies from "./Companies";
import Services from "./Services";
import WhyUs from "./WhyUs";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Companies></Companies>
            <Services></Services>
            {/* <WhyUs></WhyUs> */}
        </div>
    );
};

export default Home;