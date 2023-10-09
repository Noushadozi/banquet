import GoogleMapReact from 'google-map-react';
import { googleAPIKey } from './googleAPIKey';
import { Helmet } from 'react-helmet-async';


const About = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };


    return (
        <div>
            <Helmet>
                <title>Banquet | About</title>
            </Helmet>
            <div className="flex flex-col items-center py-[40px] my-[120px] bg-[#fcfcf9]">
                <div className="text-[50px] text-[#3e3930] italic font-Cormorant leading-[55px] font-thin mb-[35px]">Who are Banquet?</div>
                <p className="text-[15px] mt-[15px] mb-[24px] text-[#867f72] tracking-widest text-center">We have been managing event for more than 30 years, and events continue <br></br>to be at our core and in our DNA.</p>
                <div className="md:flex items-center justify-center gap-[30px] my-[20px]">
                    <div className="flex items-center justify-center flex-col">
                        <h2 className="text-[30px] text-[#3e3930] font-Cormorant leading-[55px] font-thin">350k+</h2>
                        <p className="text-[15px] mt-[px] mb-[24px] leading-[29px] text-[#867f72] tracking-widest">EVENTS WORLDWIDE</p>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <h2 className="text-[30px] text-[#3e3930] font-Cormorant leading-[55px] font-thin">18m+</h2>
                        <p className="text-[15px] mt-[px] mb-[24px] leading-[29px] text-[#867f72] tracking-widest">REGISTRATIONS</p>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <h2 className="text-[30px] text-[#3e3930] font-Cormorant leading-[55px] font-thin">2.5m+</h2>
                        <p className="text-[15px] mt-[px] mb-[24px] leading-[29px] text-[#867f72] tracking-widest">ONLINE ATTENDEES</p>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <h2 className="text-[30px] text-[#3e3930] font-Cormorant leading-[55px] font-thin">50m+</h2>
                        <p className="text-[15px] mt-[px] mb-[24px] leading-[29px] text-[#867f72] tracking-widest">STREAMING HOURS</p>
                    </div>
                </div>
            </div>
            <p className="text-[50px] text-[#3e3930] italic font-Cormorant leading-[55px] font-thin mb-[35px] text-center">Location</p>
            <p className="text-[15px] mt-[15px] mb-[24px] text-[#867f72] tracking-widest text-center">We could not provide you our location on google map as it is for testing purpose only<br></br>And it needs googleApiKey which asks for bank card.</p>
            <div style={{ height: '50vh', width: '100%' }} className='mb-[130px]'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: googleAPIKey }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default About;