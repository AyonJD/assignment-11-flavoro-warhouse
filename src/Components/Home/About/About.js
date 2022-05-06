import React from 'react';
import aboutImage from '../../../Assets/Images/about.jpg'
import founderImage from '../../../Assets/Images/founder.png'

const About = () => {
    return (
        <div className='mt-20 container mx-auto'>
            <div className="md:flex items-center">
                <img src={aboutImage} alt="" />
                <div className="content px-5 md:px-16 mt-7 md:mt-0">
                    <h1 className='text-xl text-[#6D9900] font-bold mb-2'>A Few Words About Us</h1>
                    <h1 className='text-2xl md:text-4xl font-bold mb-7 line-height'>A warehouse for good people by good people</h1>
                    <p className='text-gray-500 lh-lg text-md md:text-lg about-word-specing mb-4'>We are a strong community of 100,000+ customers and 600+ sellers who aspire to be good, do good, and spread goodness. two-sided marketplace which thrives on trust and is built on community and quality content.</p>
                    <div className='flex items-center'>
                        <img className='' src={founderImage} alt="" />
                        <div className='ml-4'>
                            <h1 className='text-xl mb-2'>Ayon Jodder</h1>
                            <h1 className='text-[#6D9900]'>CEO & Founder</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;