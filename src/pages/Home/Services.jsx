import PropTypes from 'prop-types';
import Service from "./Service";
import { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const handleSeeAll = () => {
        setSeeAll(!seeAll);
    }

    return (
        <div className='flex flex-col justify-items-start mb-[150px]'>
            <div className="w-[90%] mx-auto flex flex-col">
                {
                    seeAll ?
                        services.slice(0, services.length).map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>) :
                        services.slice(0, 3).map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                }
            </div>
            {
                seeAll || <button onClick={handleSeeAll} className="text-[11px] tracking-[3px] btn bg-[white] text-[#776F60] hover:text-[white] hover:bg-[#BDB5AA] border-[#BDB5AA] rounded-none w-[200px] mx-auto">See more</button>
            }
        </div>
    );
};

Services.propTypes = {
    services: PropTypes.array.isRequired,
}

export default Services;