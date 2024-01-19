import React from 'react';

function AboutTheAuthorComponent() {
    const authorPhotoPath = '/path-to-your-photo.jpg'; // Replace with path to your photo

    return (
        <section id="about-author" className="about-author bg-white p-8 rounded-lg shadow-md my-8 text-center max-w-2xl mx-auto">
            <img src={authorPhotoPath} alt="Author" className="w-40 h-40 rounded-full mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">About the Author</h3>
            <p className="text-gray-700 mb-2">Benjamín, the mastermind behind the Ice Nation Chronicles.</p>
            <p className="text-gray-500">A storyteller with a passion for weaving tales of adventure and intrigue.</p>
            {/* Add more personal bio or story here */}
        </section>
    );
}

export default AboutTheAuthorComponent;

