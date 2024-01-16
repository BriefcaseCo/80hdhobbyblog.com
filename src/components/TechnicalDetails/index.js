import React from 'react';

const TechnicalDetails = () => {
    const details = {
        areasOfExpertise: [
            'Transport & Logistics',
            'Telecom',
            'Managed IT Services',
            'Data Analytics',
            'Cloud Solutions',
            'Music Streaming',
            'Healthcare Technology',
            'Fuel Industry',
            'POS Systems',
            'Staff Training',
            'Consulting'
        ],
        programmingLanguages: [
            'Python',
            'PHP',
            'Java',
            '.NET',
            'Delphi',
            'React',
            'React Native',
            'NodeJS',
            'Python Flask',
            'C programming language'
        ],
        webApplicationDevelopment: [
            'Frontend development',
            'Backend development',
            'Mobile Application development',
            'SEO',
            'Unity Game Development',
            'Wordpress',
            'Expo',
            'Application debugging'
        ],
        dataManagementAnalytics: [
            'mySQL',
            'PowerBI',
            'XERO API',
            'MYOB API',
            'BI tools',
            'BI reports',
            'Data analysis',
            'TensorFlow',
            'Keras'
        ],
        hardwareNetworking: [
            'ESP32',
            'Arduino',
            'Raspberry Pi',
            'GPS',
            'OBD2',
            'RS232',
            'RS485',
            'Microwave dish',
            'Radio communications',
            'Barcode reader',
            'ADSL'
        ],
        devOpsTools: [
            'Docker',
            'Kubernetes',
            'Nginx',
            'MQTT',
            'REST integrations',
            'AWS Lambda',
            'JIRA',
            'DevOps',
            'OpenAPI',
            'Swagger',
            'Server uptime monitoring',
            'GitHub'
        ]
      };
      
    return (
        <div className="bg-white py-12">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Technical Expertise</h2>
                
                {Object.keys(details).map((key, idx) => (
                    <div key={idx} className="mt-8">
                        <h3 className="text-xl font-semibold text-indigo-600">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {details[key].map((item, index) => (
                                <li key={index} className="text-gray-600">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnicalDetails;

