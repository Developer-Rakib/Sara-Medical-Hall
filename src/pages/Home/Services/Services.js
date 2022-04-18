import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className="text-4xl my-10 border-b-4 border-orange-600 inline-block px-3">Services</h1>
            <div className='services-container container mx-auto mb-16' >
                {
                    services.map(service => <Service service={service}></Service>)
                }

            </div >
        </div>

    );
};

export default Services;