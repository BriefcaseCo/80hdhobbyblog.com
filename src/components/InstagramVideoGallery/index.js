import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const InstagramVideoGallery = () => {
    const instagramVideos = [
        "https://www.instagram.com/p/CuOc5exJfzd/",
        "https://www.instagram.com/p/CvTJcmPgatk/",
        "https://www.instagram.com/p/CvdjAgZAYsb/",
        "https://www.instagram.com/p/CwZbaCeJR0i/"
    ];

    return (
        <div className="py-12 bg-blue-100">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900 mb-12">
                    Let OnlyDan make unique engaging videos for you.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {instagramVideos.map((url, index) => (
                        <div 
                            key={index} 
                            className="shadow-lg rounded-lg overflow-hidden" 
                            style={{ 
                                display: 'flex', 
                                justifyContent: 'center',
                                width: 320, // Set the width of the card to match the embed width
                                margin: 'auto', // Center the card in the grid cell
                                height: 'auto' // Ensure the height adjusts to the content
                            }}
                        >
                            <InstagramEmbed 
                                url={url} 
                                width={320}
                                scriptLoadDisabled={false}
                                retryDelay={5000}
                                retryDisabled={false}
                                igVersion="14"
                                frame={undefined}
                                debug={false}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstagramVideoGallery;
