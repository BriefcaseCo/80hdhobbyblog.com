import React from 'react';

function ChapterComponent({ chapterData }) {
    // Function to split content into paragraphs
    const renderParagraphs = (content) => {
        return content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 text-lg leading-relaxed mb-4">
                {paragraph}
            </p>
        ));
    };

    return (
        <article className="chapter-content my-8 p-6 bg-white rounded shadow-md max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">{chapterData.title}</h2>
            {renderParagraphs(chapterData.content)}
        </article>
    );
}

export default ChapterComponent;

