import React from 'react';

const CallToActionComponent = () => {
    return (
        <div className="bg-blue-300">
            <div className="max-w-screen-lg mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                    Ready to Elevate Your Business?
                </h2>
                <p className="mt-4 text-xl leading-6 text-gray-600">
                    Partner with OnlyDans to harness the power of innovative IT solutions.
                </p>
                <div className="mt-10">
                    <a href="mailto:dddanmar@gmail.com" className="inline-flex items-center justify-center px-6 py-3 mr-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100">
                        Get in Touch
                    </a>
                    <a href="tel:0421938656" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700">
                        Call Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CallToActionComponent;
