import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMoving, faSignal, faCode, faTools, faChartBar, faCloud, faMusic, faHeartbeat, faGasPump, faCashRegister, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const KeyFeatures = () => {
    const features = [
        {
            title: 'Bespoke App Development',
            description: 'Tailored front-end and back-end application development utilizing the latest technologies, languages, frameworks, and infrastructure for optimal performance and scalability.',
            icon: faCode // Font Awesome icon for coding
        },
        {
            title: 'Data Analytics',
            description: 'Leveraging data analytics to provide insightful and actionable business intelligence.',
            icon: faChartBar // Example icon
        },
        {
            title: 'Transport & Logistics',
            description: 'In-depth expertise in streamlining transport and logistics operations with cutting-edge technology solutions.',
            icon: faTruckMoving // Example icon
        },
        {
            title: 'Cloud Solutions',
            description: 'Expert in cloud computing solutions, offering scalable and secure cloud infrastructure.',
            icon: faCloud // Example icon
        },
        {
            title: 'Music Streaming',
            description: 'Innovative technology solutions for the music streaming industry, enhancing user experience and platform performance.',
            icon: faMusic // Example icon
        },

        {
            title: 'Managed IT Services',
            description: 'Comprehensive management of IT services to optimize business operations and efficiency.',
            icon: faTools // Example icon
        },
        {
            title: 'Telecom',
            description: 'Advanced solutions for the telecom industry, enhancing connectivity and network performance.',
            icon: faSignal // Example icon
        },
        {
            title: 'Healthcare Technology',
            description: 'Developing and implementing technology solutions to improve healthcare delivery and patient care.',
            icon: faHeartbeat // Example icon
        },
        {
            title: 'Fuel Industry',
            description: 'Technological advancements for the fuel industry, improving efficiency and sustainability.',
            icon: faGasPump // Example icon
        },
        {
            title: 'POS Systems',
            description: 'Customized Point of Sale systems solutions tailored to enhance retail and service industry transactions.',
            icon: faCashRegister // Example icon
        },
        {
            title: 'Staff Training',
            description: 'Comprehensive training programs for staff to enhance their IT skills and knowledge.',
            icon: faUsers // Example icon
        },
        {
            title: 'Consulting',
            description: 'Expert consulting services to guide and implement effective IT strategies and solutions.',
            icon: faLightbulb // Example icon
        }
    ];


    return (
        <div className="bg-blue-100 py-12">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                        Key Domains
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Leveraging a wide range of technologies and years of experience to tackle your IT challenges.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <div key={index} className="p-6 bg-blue-200 rounded-lg shadow-xl">
                                <FontAwesomeIcon icon={feature.icon} className="text-3xl text-blue-500 mb-4" />
                                <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
                                <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyFeatures;

