import React from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import { Fade } from 'react-reveal';
import './Blog.css'

const Blog = () => {
    return (
        <div className='pt-20'>

            <Fade top>
                <h2 className="text-3xl sm:text-5xl py-8">Question & Answer</h2>
            </Fade>
            <Accordion className='blog-contaner'>

                <Fade left>
                    <AccordionItem className='my-2'>
                        <AccordionItemHeading className='border inline-block rounded px-5'>
                            <AccordionItemButton>
                                <h4 className='text-lg sm:text-2xl'>Why are you using firebase? What other options do you have to implement authentication?</h4>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='inline-block rounded '>
                                <span>Firebase is used for authentication to maintain the user login system for the website. It can be done by raw code but it is time consume and not much secure. As firebase is a product of GOOGLE inc. It is much secure and easy to use so I am using firebase</span>
                                <h5 className="text-xl font-semibold">There are many other company to implement authentication or alternative of firebase they are :-</h5>
                                <ul className='text-left w-3/5 mx-auto'>
                                    <li>1. Okta</li>
                                    <li>2. OneLogin</li>
                                    <li>3. JumpCloud</li>
                                    <li>4. Centrify</li>
                                    <li>5. Auth0</li>
                                    <li>6. Microsoft Azure</li>
                                </ul>
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Fade>

                <Fade right>
                    <AccordionItem className='my-2'>
                        <AccordionItemHeading className='border inline-block rounded px-5'>
                            <AccordionItemButton>
                                <h4 className='text-lg sm:text-2xl'>What other services does firebase provide other than authentication?</h4>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='inline-block rounded '>
                                Firebase is a authentication solution company. But Beside it they supply many other services:
                                <ul className='text-left w-3/5 mx-auto'>
                                    <li>1. Cloud Functions.</li>
                                    <li>2. Cloud Firestore</li>
                                    <li>3. Hosting</li>
                                    <li>4. Cloud Storage.</li>
                                    <li>5. Google Analytics.</li>
                                    <li>6. Predictions</li>
                                    <li>7. Cloud Messaging</li>
                                </ul>
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Fade>

                <Fade left>
                    <AccordionItem className='my-2'>
                        <AccordionItemHeading className='border inline-block rounded px-5'>
                            <AccordionItemButton>
                                <h4 className='text-lg sm:text-2xl'>Difference between authorization and authentication?</h4>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='inline-block rounded '>
                                <div className='flex justify-between Difference flex-col sm:flex-row'>
                                    <ul className='text-left'>
                                        <h5 className="text-xl">Authorization</h5>
                                        <li>1. Authorization means Create user and give them som extra power to maintain the website..</li>
                                        <li>2. Authorization works through settings that are created and maintained by the website owners.</li>
                                        <li>3. Authorization do not visible to the user or cannot be change</li>
                                    </ul>
                                    <ul className='text-left'>
                                        <h5 className="text-xl">Authentication</h5>
                                        <li>1. Authentication means create and verify user.</li>
                                        <li>2. Authentication works through passwords, one-time pins, and other information provided or entered by the user. This function help users to change or update their information</li>
                                        <li>3. Authentication can be change or modify by the user.</li>
                                    </ul>
                                </div>
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Fade>


            </Accordion>
        </div>
    );
};

export default Blog;