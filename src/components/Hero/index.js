import React, { useState } from 'react';

const Hero = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="bg-blue-600 h-screen flex flex-col items-center justify-center text-white px-4">
            <div className="bg-white p-4 rounded-lg mb-6 flex items-center justify-center" style={{ width: '400px', height: '400px' }}>
                {isLoading && (
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-800"></div>
                )}
                <img
                    src="/logo.png"
                    alt="OnlyDans Logo"
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        display: isLoading ? 'none' : 'block',
                    }}
                    onLoad={handleImageLoad}
                />
            </div>
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-6">Doodle International Butting</h1>
                <p className="text-2xl mb-6">Expert Technology Doodle Services</p>
                <a
                    href="#personal-introduction"
                    className="bg-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 hover:scale-105 transition duration-300"
                    style={{ display: isLoading ? 'none' : 'inline-block' }}
                >
                    Doodle More
                </a>
            </div>
        </div>
    );
};

export default Hero;

