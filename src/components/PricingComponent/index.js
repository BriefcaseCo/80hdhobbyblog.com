import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faUser, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const PricingComponent = () => {
    const pricing = {
        title: "Consulting Services with OnlyDans",
        plans: [
            {
                name: "Basic Consulting",
                price: "Free",
                icon: faUser,
                features: [
                    "Initial phone call consultation",
                    "Basic IT solutions and advice"
                ]
            },
            {
                name: "Premium Consulting",
                price: "$175 AUD per hour",
                icon: faGem,
                features: [
                    "In-depth project involvement",
                    "Comprehensive IT strategies and solutions",
                    "Priority email and phone support"
                ]
            },
            {
                name: "Enterprise Solutions",
                price: "POA",
                icon: faProjectDiagram,
                features: [
                    "Full project management and oversight",
                    "Advanced IT solutions and integrations",
                    "Dedicated support and consulting"
                ]
            }
        ]
    };
      
    return (
        <div className="bg-blue-100 py-12">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                        {pricing.title}
                    </h2>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {pricing.plans.map((plan, index) => (
                            <div key={index} className="p-6 bg-white rounded-lg shadow-xl">
                                <FontAwesomeIcon icon={plan.icon} className="text-3xl text-blue-500 mb-4" />
                                <h3 className="text-lg font-semibold text-gray-800">{plan.name}</h3>
                                <p className="mt-2 text-base text-gray-600">{plan.price}</p>
                                <ul className="mt-6 list-disc list-inside text-sm text-gray-600">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingComponent;
