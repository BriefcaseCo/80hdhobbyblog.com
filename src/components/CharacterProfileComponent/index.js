import React, { useState, useEffect } from 'react';

function CharacterProfileComponent() {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        // Fetch the characters JSON
        const fetchCharacters = async () => {
            try {
                const response = await fetch('/stories/ice_nation/characters.json');
                const data = await response.json();
                setCharacters(Object.entries(data)); // Convert object to array of [key, value] pairs
            } catch (error) {
                console.error('Error fetching character data:', error);
            }
        };

        fetchCharacters();
    }, []);

    const openModal = (character) => {
        setSelectedCharacter(character);
    };

    const closeModal = () => {
        setSelectedCharacter(null);
    };

    return (
        <div id="character-profiles" className="character-profiles my-8">
            <h3 className="text-3xl font-bold text-center mb-6">Character Profiles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {characters.map(([name, details], index) => (
                    <div key={index} className="character-card p-4 border rounded shadow-lg hover:shadow-2xl transition-shadow cursor-pointer" onClick={() => openModal(details)}>
                        <h4 className="text-xl font-semibold mb-3">{name}</h4>
                        <img src={`/stories/ice_nation/images/${details.image}`} alt={name} className="mb-3 w-full h-auto rounded-lg" />
                        <p className="text-gray-600">{details.description}</p>
                    </div>
                ))}
            </div>

            {/* Modal for selected character */}
            {selectedCharacter && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={closeModal}>
                    <div className="bg-white p-4 rounded-lg shadow-xl max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
                        <h4 className="text-2xl font-bold mb-3">{selectedCharacter.name}</h4>
                        <img src={`/stories/ice_nation/images/${selectedCharacter.image}`} alt={selectedCharacter.name} className="mb-4 w-full h-auto rounded-lg" />
                        <p className="text-lg text-gray-700">{selectedCharacter.description}</p>
                        <button 
                            onClick={closeModal} 
                            className="absolute top-2 right-2 text-xl font-bold text-gray-800 hover:text-gray-600"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CharacterProfileComponent;

