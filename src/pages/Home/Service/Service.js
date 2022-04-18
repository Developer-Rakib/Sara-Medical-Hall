import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Fade } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const navigate = useNavigate()
    const handleAppoinment = () => {
        navigate("/checkOut")
    }
    return (
        <Fade top>
            <div className={`services-item ${service.active && "active"}`}>
                <img src={service.img} alt="" />
                <div className='services-info'>
                    <h5 className="text-xl sm:text-2xl mt-4">{service.name}</h5>
                    <p>{service.desciption.slice(0, 150)}</p>
                    <span className='price'>${service.price}</span>
                    <button onClick={handleAppoinment} className='flex'><FiShoppingCart className='mr-2'></FiShoppingCart> APPOINMENT</button>
                </div>
            </div>
        </Fade>
    );
};

export default Service;