import React from 'react';

function StoryCoverComponent({ coverImage }) {
    return (
        <div className="story-cover my-8 text-center">
            <img 
                src={coverImage} 
                alt="Story Cover" 
                className="w-full max-w-xl mx-auto rounded-lg shadow-xl" 
                style={{ maxHeight: '600px' }}
            />
        </div>
    );
}

export default StoryCoverComponent;

