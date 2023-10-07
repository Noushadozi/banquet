import PropTypes from 'prop-types';
import Service from "./Service";

const Services = ({ services }) => {

    return (
        <div className="w-[90%] mx-auto">
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