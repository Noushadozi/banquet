import Marquee from "react-fast-marquee";

const Companies = () => {
    return (
        <div className="my-[100px]">
            <h3 className="text-5xl text-[#3e3930] mb-[40px] font-Cormorant italic">Companies work with us</h3>
            <Marquee speed={200} pauseOnHover={true} >
                <img src="h1-client-1-hover.png" className="mr-[100px]" alt="" />
                <img src="h1-client-2-hover.png" className="mr-[100px]" alt="" />
                <img src="h1-client-3-hover.png" className="mr-[100px]" alt="" />
                <img src="h1-client-4-hover.png" className="mr-[100px]" alt="" />
                <img src="h1-client-5-hover.png" className="mr-[100px]" alt="" />
            </Marquee>
        </div>
    );
};

export default Companies;