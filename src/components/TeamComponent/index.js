/* global mixpanel */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebook, 
    faTwitter, 
    faLinkedin, 
    faGithub, 
    // Import additional icons for other social platforms
    faInstagram,
    faTiktok,
    // Other icons as needed
} from '@fortawesome/free-brands-svg-icons';
import { faLink, faTree } from '@fortawesome/free-solid-svg-icons';

import { 
    // Import regular icons for phone, email, etc.
    faPhone,
    faEnvelope,
    // Add more as needed
} from '@fortawesome/free-solid-svg-icons';
// Define the team data with social links
const teams = [
    {
        name: 'Dan Ward',
        role: 'CEO & Technology Specialist',
        description: 'Dan leads OnlyDans International Consulting with expertise in cloud computing, machine learning, and management. His journey in technology, spanning various sectors, has equipped him with a diverse skill set. He is adept in areas like cloud solutions, data architecture, and high availability systems. Dan\'s adaptability and leadership are highly regarded in the tech community.',
        image: '/dan.png',
         socialLinks: {
            phone: 'tel:0421938656',
            email: 'mailto:dddanmar@gmail.com',
            linkedin: 'https://www.linkedin.com/in/onlydans-ceo',
            instagram: 'https://instagram.com/captainfkingawesome',
            tiktok: 'https://www.tiktok.com/@captainfkingawesome',
            github: 'https://github.com/BriefcaseCo'
        },
    },
    {
        name: 'Amy Stroud',
        role: 'Chief Operations Officer & Tech Industry Expert',
        description: 'Amy, with over 20 years in the tech industry, has excelled in diverse sectors like medical, construction, and corporate. As the COO at CCM Oceanic Pty Ltd and founder of The NFT Agency, she combines her rich experience with a keen interest in web3, NFTs, and the metaverse. Her academic background in technology and health, including a Graduate Certificate in Digital Health, informs her expertise in healthcare IT. Amy is also a prominent figure in social media, advocating for cryptocurrencies and engaging in tech education, while maintaining a relatable and authentic personal brand.',
        image: 'amy.png',
        socialLinks: {
            twitter: 'https://twitter.com/amy_stroud',
            linkedin: 'https://www.linkedin.com/in/amystroud12/',
            linktree: 'https://linktr.ee/amy_stroud'
        }
    },
    {
        name: 'Will [REDACTED]',
        role: 'Chief Information Security Officer & Cybersecurity Expert',
        description: 'With a wealth of experience spanning a decade in Cyber Security, DevOps, Administration, and Support roles, Will has contributed his skills to both private and diverse sectors. His background as an engineer and advisor for security operations highlights a profound grasp of intricate security landscapes. Will boasts an array of extensive certifications, underlining his proficiency in the field. While exuding an enigmatic presence, his expertise shines through, and he is readily available to showcase his skills through consultations.',
        image: '/will.png',
        socialLinks: {
            asio: 'https://twitter.com/ASIOGovAu',
            asd: 'https://twitter.com/ASDGovAu',
            cybergovau: 'https://twitter.com/CyberGovAU'
        }
    }
];
const TeamComponent = ({ onDanImageClick, showMarkdown }) => {

const HackerAlertModal = () => (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    }}>
        <div style={{
            backgroundColor: 'black',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            color: 'limegreen',
            border: '2px solid limegreen'
        }}>
            <h2>ACCESS DENIED</h2>
            <p>Unauthorized access attempt detected.</p>
            <button onClick={() => setShowHackerAlert(false)} style={{
                backgroundColor: 'limegreen',
                color: 'black',
                padding: '10px 20px',
                margin: '10px 0',
                borderRadius: '5px',
                cursor: 'pointer'
            }}>
                Close
            </button>
        </div>
    </div>
);
    const [danClickCount, setDanClickCount] = useState(0);
    const [showHackerAlert, setShowHackerAlert] = useState(false);

    const handleDanClick = () => {
        if (showMarkdown) {
            setShowHackerAlert(true);

        } else {
            const newCount = danClickCount + 1;
            setDanClickCount(newCount);
            if (newCount === 5) {
                onDanImageClick();
            }
            mixpanel.track('Dan Image Clicked', {
                'Name': 'Dan Ward',
                'Role': 'CEO & Technology Specialist',
                'Click Count': newCount,
                // You can add more properties as needed
            });
        }
    };
  
    const getSocialIcon = (key) => {
        const iconMapping = {
            facebook: faFacebook,
            twitter: faTwitter,
            linkedin: faLinkedin,
            github: faGithub,
            instagram: faInstagram,
            tiktok: faTiktok,
            phone: faPhone,
            email: faEnvelope,
            asio: faTwitter,
            asd: faTwitter,
            linktree: faLink, // or faTree, depending on your preference

            cybergovau: faTwitter
            ,
            // Add more mappings as needed
        };
        return iconMapping[key] || null; // Returns null if the key is not found
    };
    return (
        <div className="bg-blue-100 py-12">
                {showHackerAlert && <HackerAlertModal />}

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 mb-6 lg:grid-cols-3">
                    {teams.map(team => (
                        <div key={team.name} className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"> {/* Flex container */}
                            <div>
                            <img
                                src={team.image}
                                alt={`${team.name} Avatar`}
                                className="w-full h-auto object-cover rounded-full mb-4"
                                onClick={team.name === 'Dan Ward' ? handleDanClick : null}
                                />
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 text-center">{team.name}</h3>
                                <span className="text-gray-600 text-center block">{team.role}</span>
                                <p className="mt-3 text-gray-500 text-left">{team.description}</p>
                            </div>
                            <div className="flex justify-end space-x-4 mt-4"> {/* Adjusted for bottom right alignment */}
                                {Object.entries(team.socialLinks).map(([key, link]) => {
                                    const icon = getSocialIcon(key);
                                    return icon && (
                                        <a key={key} href={link} target="_blank" rel="noreferrer" className={`${key}-button`}>
                                            <FontAwesomeIcon icon={icon} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamComponent;
