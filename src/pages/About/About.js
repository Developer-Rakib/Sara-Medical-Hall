import React from 'react';
import { Zoom } from 'react-reveal';

const About = () => {
    return (
        <Zoom top>
            <div className='pt-24'>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg text-left w-2/3 mx-auto">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">About Me</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details.</p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Md Tazul Islam Rakib</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Expert of</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Frontend Developer</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">tajulislam601@gmail.com</dd>
                            </div>

                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">About</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    I'm Frontend, MERN Stack Developer! I am an enthusiastic and dedicated learner. with a deep interest in JavaScript. To work in the Software industry with modern web technologies web 3.0 and To pursue a challenging job in a dynamic and esteemed organization, where I will be able to perform in any kind of situation with full effort to utilize my knowledge, skill, and experience for professional career development..
                                </dd>
                            </div>

                        </dl>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default About;