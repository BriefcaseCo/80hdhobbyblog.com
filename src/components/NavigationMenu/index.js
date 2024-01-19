import React from 'react';
// Import React Router Link or other navigation elements if needed

function NavigationMenu() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex justify-center space-x-4">
                <li><a href="#about-author">About the Author</a></li>
                <li><a href="#character-profiles">Character Profiles</a></li>
                <li><a href="#interactive-map">Interactive Map</a></li>
            </ul>
        </nav>
    );
}

export default NavigationMenu;

