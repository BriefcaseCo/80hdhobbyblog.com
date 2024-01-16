import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PersonalIntroduction = () => {
    const intro = {
        name: "OnlyDans International Consulting",
        role: "CEO of OnlyDans International Consulting",
        experience: "Over two decades of experience in the IT industry",
        description: [
            "OnlyDans are your trusted technology partner, bringing a wealth of experience and a diverse skillset to the table.",
            "With expertise in a wide range of technologies, from cloud computing and machine learning to software development and network architecture, ODIC tackles even the most complex IT challenges.",
            "Whether you need strategic consulting, technical implementation, or project management, the team's leadership and adaptability ensure your goals are met with precision and excellence.",
            "Partner with OnlyDans International Consulting to elevate your technology initiatives and propel your business forward."
        ]
    };

    return (
        <div id="personal-introduction" className="bg-blue-100 py-12">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{intro.name}</h2>
                    <a href="tel:0421938656" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        Call Now
                    </a>
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                    <img src="/logo.png" alt="Dan Ward" className=" mb-8 lg:mb-0 lg:mr-8 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 animate-pulse" style={{ maxWidth: '200px', height: 'auto' }} />
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                        <div className="flex flex-col justify-between h-full">
                            <div className=" space-y-4 text-gray-500">
                                {intro.description.map((paragraph, index) => (
                                    <p key={index} className="text-base leading-relaxed">{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalIntroduction;
