import React from 'react';

const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()
    return (
        <div className='py-3 sm:py-6'>
            <p className='text-sm sm:text-base'>	&copy; All Reserved by <a className='text-red-600' href="https://github.com/Developer-Rakib" target="_blank">Developer Rakib</a>. {year}</p>
        </div>
    );
};

export default Footer;