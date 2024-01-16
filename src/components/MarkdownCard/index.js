import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const MarkdownCard = ({ filePath }) => {
    const [markdown, setMarkdown] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(filePath)
            .then(response => response.text())
            .then(text => {
                setMarkdown(text);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching markdown file:', error);
                setIsLoading(false);
            });
    }, [filePath]);

    const components = {
        h1: ({ node, ...props }) => <h1 {...props} className="text-4xl font-extrabold text-gray-900 mt-6 mb-4" />,
        h2: ({ node, ...props }) => <h2 {...props} className="text-3xl font-bold text-gray-800 mt-5 mb-3" />,
        h3: ({ node, ...props }) => <h3 {...props} className="text-2xl font-semibold text-gray-700 mt-4 mb-2" />,
        p: ({ node, ...props }) => <p {...props} className="text-base text-gray-600 my-2" />,
        
        ul: ({ node, ...props }) => <ul {...props} className="list-disc list-inside my-4" />,
        ol: ({ node, ...props }) => <ol {...props} className="list-decimal list-inside my-4" />,
        li: ({ node, ...props }) => <li {...props} className="ml-4 text-gray-600" />,
        a: ({ node, ...props }) => (
            <span {...props} style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={(e) => e.preventDefault()} />
        ),
        blockquote: ({ node, ...props }) => (
            <blockquote {...props} style={{ borderLeft: '4px solid #ddd', margin: '1.5em 10px', padding: '0.5em 10px', fontStyle: 'italic', color: '#666' }} />
        ),
        code: ({ node, inline, ...props }) => (
            inline ?
                <code {...props} style={{ backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '4px', fontSize: '90%', fontFamily: 'monospace' }} /> :
                <pre style={{ backgroundColor: '#f5f5f5', padding: '16px', overflowX: 'auto' }}><code {...props} /></pre>
        ),
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="bg-blue-100 py-12">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="justify-between items-center mb-8 bg-white p-6 rounded-lg shadow-lg w-full">
                    <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};


export default MarkdownCard;
