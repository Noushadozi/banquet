import PropTypes from 'prop-types';
import Service from "./Service";
import { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('../public/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="w-[90%] mx-auto flex flex-col">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

Services.propTypes = {
    services: PropTypes.array.isRequired,
}

export default Services;