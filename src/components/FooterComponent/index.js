import React from 'react';

function FooterComponent() {
    return (
        <footer className="bg-gray-800 text-white text-center p-6 mt-8">
            <div className="max-w-3xl mx-auto">
                <p className="text-lg font-medium mb-2">
                    © {new Date().getFullYear()} Ice Nation Chronicles. All Rights Reserved.
                </p>
                <p className="text-gray-400">
                    Created by the legendary Benjamín
                </p>
                <div className="flex justify-center mt-4">
                    <a href="https://twitter.com/yourhandle" className="mx-2">Twitter</a>
                    <a href="https://facebook.com/yourhandle" className="mx-2">Facebook</a>
                    <a href="https://instagram.com/yourhandle" className="mx-2">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;

