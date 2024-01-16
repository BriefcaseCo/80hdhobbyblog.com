import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faTiktok, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <div className="mt-8 flex justify-center space-x-6">
                    {/* Social media links with icons */}
                    <a href="tel:0421938656" className="call-button">
                        <FontAwesomeIcon icon={faPhone} />
                    </a>
                    <a href="mailto:dddanmar@gmail.com" className="email-button">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/onlydans-ceo" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a target="_blank" href="https://instagram.com/captainfkingawesome" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                        <span className="sr-only">Instagram</span>
                    </a>
                    <a target="_blank" href="https://www.tiktok.com/@captainfkingawesome" rel="noreferrer">
                        <FontAwesomeIcon icon={faTiktok} />
                        <span className="sr-only">TikTok</span>
                    </a>
                    <a target="_blank" href="https://github.com/BriefcaseCo" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                        <span className="sr-only">Github</span>
                    </a>
                </div>
                <div className="mt-8">
                    <p className="text-center text-base leading-6 text-gray-400">
                        &copy; {new Date().getFullYear()} OnlyDans International Consulting. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
