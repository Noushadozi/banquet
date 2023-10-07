import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
    const services = useLoaderData();
    console.log(services);

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

export default Services;