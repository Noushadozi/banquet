
const Request = () => {
    return (
        <div className="hero min-h-[50vh] w-[90%] mx-auto">
            <div className="flex-col">
                <div className="text-center lg:text-left">
                    <p className="text-[12px] tracking-[3px] text-center leading-[29px] text-[#867f72]">READY TO GET IN TOUCH?</p>
                    <h1 className="font-thin text-center text-[50px] text-[#3e3930] italic font-Cormorant">Make an Event Request</h1>
                </div>
                <div className="flex-shrink-0 w-full">
                    <form className="card-body">
                        <div className="flex gap-[40px] mb-[30px]">
                            <div className="form-control">
                                <input name="name" type="name" placeholder="name" className="input border-[#BDB5AA] rounded-none md:w-[350px] placeholder-[#BDB5AA]" required />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="email" className="input border-[#BDB5AA] rounded-none md:w-[350px] placeholder-[#BDB5AA]" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <input type="area" placeholder="message" className="input border-[#BDB5AA] rounded-none md:w-[740px] placeholder-[#BDB5AA] mb-[40px] h-[100px]" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="text-[11px] tracking-[3px] btn bg-[white] text-[#776F60] hover:text-[white] hover:bg-[#BDB5AA] border-[#BDB5AA] rounded-none w-[200px] mx-auto">Get in Touch</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Request;