import React from 'react';

const ElevateComponent = () => {
    const info = {
        name: "Elevate",
        tagline: "Modular ERP and CRM for Every Business",
        description: [
            "Elevate is a white-labeled, project-centric ERP and CRM system, developed from extensive industry and life experience. It's uniquely designed to be easily reskinned for different business domains.",
            "Built with a 'modularity and 3rd integrations first' attitude, Elevate seamlessly adapts to your business needs, allowing for efficient integration with various third-party systems.",
            "Leveraging the expertise in cloud solutions, data analytics, and software development, Elevate is poised to revolutionize the way businesses manage their operations and customer relationships."
        ],
        successFactors: [
            "Expertise in diverse technologies ensures robust and versatile system capabilities.",
            "Proven track record in leadership and management guarantees successful project execution and implementation.",
            "The commitment to understanding and meeting client-specific needs makes Elevate a highly adaptable solution for any business context."
        ]
      };
      
    return (
        <div className="bg-white py-12">
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900">{info.name}</h2>
                    <p className="mt-2 text-lg text-indigo-600">{info.tagline}</p>
                </div>

                <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                    {info.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    <h3 className="text-xl text-gray-900 mt-8">Elevate's Competitive Edge:</h3>
                    <ul>
                        {info.successFactors.map((factor, index) => (
                            <li key={index} className="text-gray-600">{factor}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ElevateComponent;

