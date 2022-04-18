import React, { useEffect, useState } from 'react';
import { Slide } from 'react-reveal';
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
            <Slide top>
                <h1 className="text-4xl my-10 border-b-4 border-orange-600 inline-block px-3">Services</h1>
            </Slide>
            <div className='services-container container mx-auto mb-16' >
                {
                    services.map(service => <Service
                        service={service}
                        key={service.id}
                    ></Service>)
                }

            </div >
        </div>

    );
};

export default Services;