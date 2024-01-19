import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; // Make sure to install react-icons if not already

function SocialMediaLinksComponent() {
    return (
        <div className="social-media-links my-8 text-center">
            <h4 className="text-2xl font-bold mb-4">Connect with Me</h4>
            <div className="flex justify-center space-x-4">
                <a href="https://twitter.com/yourhandle" className="text-blue-500 hover:text-blue-600">
                    <FaTwitter size={30} />
                </a>
                <a href="https://facebook.com/yourhandle" className="text-blue-700 hover:text-blue-800">
                    <FaFacebook size={30} />
                </a>
                <a href="https://instagram.com/yourhandle" className="text-pink-600 hover:text-pink-700">
                    <FaInstagram size={30} />
                </a>
                {/* Add more social media icons and links as needed */}
            </div>
        </div>
    );
}

export default SocialMediaLinksComponent;

