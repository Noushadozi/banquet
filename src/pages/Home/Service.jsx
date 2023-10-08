import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = ({ service }) => {
    const { id, image_url, name, description } = service;
    AOS.init();

    return (
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div className={`mb-[85px] md:flex gap-[60px] items-center ${id % 2 == 0 ? "flex-row" : "flex-row-reverse"}`}>
                <img src={image_url} className="md:w-[55%]" alt="" />
                <div className="shrink-0 md:w-[38%]">
                    <p className="text-[50px] text-[#3e3930] italic font-Cormorant leading-[55px] font-thin">{name}</p>
                    <p className="text-[15px] mt-[15px] mb-[24px] leading-[29px] text-[#867f72] tracking-widest">{description}</p>
                    <div className="read-more flex items-center gap-[5px] text-[#696359] text-[11px] font-semibold tracking-widest">
                        <div className="line h-[1px] w-[20px] bg-[#696359]"></div>
                        <Link to={`/service/${id}`}><a className="leading-8 ">READ MORE</a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired,
}


export default Service;