import React from 'react';

const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()
    console.log(year);
    return (
        <div className='py-6'>
            <p>	&copy; All Reserved by <a className='text-blue-600' href="https://github.com/Developer-Rakib" target="_blank">Developer Rakib</a>. {year}</p>
        </div>
    );
};

export default Footer;