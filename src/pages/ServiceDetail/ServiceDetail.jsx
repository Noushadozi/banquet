import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const ServiceDetail = () => {
    const allServices = useLoaderData();
    const detail = useParams();

    const serviceDetail = allServices.find(service => service.id == detail.serviceId);
    console.log(serviceDetail);
    const { image_url, name, description, price } = serviceDetail;

    return (
        <div>
            <Navbar></Navbar>
            <div className={`mb-[85px] md:flex gap-[60px] items-center`}>
                <img src={image_url} className="w-[55%]" alt="" />
                <div className="shrink-0 w-[38%]">
                    <p className="text-[50px] text-[#3e3930] italic font-Cormorant leading-[55px] font-thin">{name}</p>
                    <p className="text-[15px] mt-[15px] mb-[24px] leading-[29px] text-[#867f72] tracking-widest">{description}</p>
                    <div className="text-[#696359] text-[21px] font-semibold tracking-widest">
                        <p>{price}$</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;