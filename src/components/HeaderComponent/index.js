import React from 'react';

function HeaderComponent() {
    return (
        <header className="bg-blue-600 text-white text-center p-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-bold mb-2">Ice Nation Chronicles</h1>
                <p className="text-xl font-light">An Epic Journey Through a Mystical Land</p>
                {/* Navigation could go here if needed */}
            </div>
        </header>
    );
}

export default HeaderComponent;

