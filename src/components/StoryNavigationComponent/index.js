import React from 'react';

function StoryNavigationComponent({ totalChapters, currentChapter, onChapterSelect }) {
    // Function to render chapter buttons
    const renderChapterButtons = () => {
        let buttons = [];
        for (let i = 1; i <= totalChapters; i++) {
            buttons.push(
                <button 
                    key={i} 
                    onClick={() => onChapterSelect(i)}
                    className={`m-2 p-2 text-lg font-medium border rounded transition duration-300 ease-in-out 
                                ${i === currentChapter ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-200'}`}
                >
                    Chapter {i}
                </button>
            );
        }
        return buttons;
    };

    return (
        <div className="chapter-navigation my-8">
            <div className="flex justify-center flex-wrap">
                {renderChapterButtons()}
            </div>
        </div>
    );
}

export default StoryNavigationComponent;

