import React from 'react';
import './Banner.css'

const Bannner = () => {
    return (
        <div className='banner-container text-left px-20 flex justify-center flex-col'>
            <h5 className="text-lg">Psychology specialist</h5>
            <h1 className="text-7xl">Dr. Sara Dowson</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa sunt voluptatem sit ea mollitia tempora? Dolores excepturi praesentium voluptatum veniam.</p>
            <button>Read More</button>
        </div>
    );
};

export default Bannner;