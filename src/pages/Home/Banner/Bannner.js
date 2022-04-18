import React from 'react';
import { Fade } from 'react-reveal';
import './Banner.css'

const Bannner = () => {
    return (
        <div className='banner-container sm:text-left  sm:px-20 flex justify-center flex-col'>
            <Fade top>
                <h5 className="text-lg">Psychology specialist</h5>
            </Fade>
            <Fade right>
                <h1 className="text-5xl sm:text-7xl">Dr. Sara Dowson</h1>
            </Fade>
            <Fade left>
                <p>Mollis aliquam ut porttitor leo a diam. Ac tortor vitae purus faucibus ornare. Sapien faucibus et molestie ac feugiat. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. .</p>
            </Fade>
            <Fade bottom>
                <button>Read More</button>
            </Fade>
        </div>
    );
};

export default Bannner;