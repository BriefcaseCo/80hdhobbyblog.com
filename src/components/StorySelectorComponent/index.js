import React from 'react';

function StorySelectorComponent({ selectedStory, onSelectStory }) {
    // Assuming 'Ice Nation' is the only story for now. If there are more, they can be added to the stories array.
    const stories = ['Ice Nation'];

    return (
        <div className="story-selector my-8 p-4 text-center">
            <h4 className="text-2xl font-bold mb-4">Choose a Story</h4>
            {stories.map(story => (
                <button
                    key={story}
                    onClick={() => onSelectStory(story)}
                    className={`m-2 p-2 border rounded ${selectedStory === story ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-400'}`}
                >
                    {story}
                </button>
            ))}
        </div>
    );
}

export default StorySelectorComponent;

