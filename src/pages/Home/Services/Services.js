import React from 'react';
import relationship from '../../../img/relationship.png';
import anixiaty from '../../../img/anixiaty.png';
import Psychologist from '../../../img/Psychologist.png';
import { FiShoppingCart } from 'react-icons/fi';
import './Services.css'

const Services = () => {
    return (
        <div className='services-container container mx-auto my-16'>
            <div className='services-item'>
                <img src={relationship} alt="" />
                <div className='services-info'>
                    <h5 className="text-xl sm:text-2xl mt-4">Relationship Issues</h5>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <span className='price'>$100</span>
                    <button className='flex'><FiShoppingCart className='mr-2'></FiShoppingCart> APPOINMENT</button>
                </div>
            </div>
            <div className='services-item active'>
                <img src={anixiaty} alt="" />
                <div className='services-info'>
                    <h5 className="text-xl sm:text-2xl mt-4">Anxiety Issues</h5>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <span className='price'>$150</span>
                    <button className='flex'><FiShoppingCart className='mr-2'></FiShoppingCart> APPOINMENT</button>
                </div>
            </div>
            <div className='services-item'>
                <img src={Psychologist} alt="" />
                <div className='services-info'>
                    <h5 className="text-xl sm:text-2xl mt-4">Psychologist Issues</h5>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <span className='price'>$250</span>
                    <button className='flex'><FiShoppingCart className='mr-2'></FiShoppingCart> APPOINMENT</button>
                </div>
            </div>
        </div>
    );
};

export default Services;