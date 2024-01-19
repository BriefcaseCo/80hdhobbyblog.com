import React from 'react';

function AudioPlayerComponent({ audioFile }) {
    return (
        <div className="audio-player my-8 text-center">
            <audio 
                controls 
                src={audioFile} 
                className="w-full max-w-md mx-auto"
                style={{ outline: 'none' }}
            >
                Your browser does not support the audio element.
            </audio>
            <p className="text-gray-600 text-sm mt-2">Listen to the chapter</p>
        </div>
    );
}

export default AudioPlayerComponent;

