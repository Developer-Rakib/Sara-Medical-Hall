import React from 'react';
import './Banner.css'

const Bannner = () => {
    return (
        <div className='banner-container sm:text-left  sm:px-20 flex justify-center flex-col'>
            <h5 className="text-lg">Psychology specialist</h5>
            <h1 className="text-5xl sm:text-7xl">Dr. Sara Dowson</h1>
            <p>Mollis aliquam ut porttitor leo a diam. Ac tortor vitae purus faucibus ornare. Sapien faucibus et molestie ac feugiat. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. .</p>
            <button>Read More</button>
        </div>
    );
};

export default Bannner;