
const Service = ({ service }) => {
    const { id, image_url, name, description } = service;

    return (
        <div className={`mb-[85px] md:flex gap-[60px] items-center ${id % 2 == 0 ? "flex-row" : "flex-row-reverse"}`}>
            <img src={image_url} className="w-[55%]" alt="" />
            <div className="shrink-0 w-[38%]">
                <p className="text-[50px] text-[#3e3930] italic font-Cormorant leading-[55px] font-thin">{name}</p>
                <p className="text-[15px] mt-[15px] mb-[24px] leading-[29px] text-[#867f72] tracking-widest">{description}</p>
                <div className="read-more flex items-center gap-[5px] text-[#696359] text-[11px] font-semibold tracking-widest">
                    <div className="line h-[1px] w-[20px] bg-[#696359]"></div>
                    <a href="" className="leading-8 ">READ MORE</a>
                </div>
            </div>
        </div>
    );
};

export default Service;