import React, { useState } from 'react';

function FeedbackComponent() {
    const [feedback, setFeedback] = useState('');

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const submitFeedback = (e) => {
        e.preventDefault();
        // Logic to handle feedback submission, e.g., POST to a server or email
        console.log(feedback);
        alert('Thank you for your feedback!');
        setFeedback(''); // Reset feedback after submission
    };

    return (
        <div className="feedback my-8 p-6 bg-white rounded shadow-md max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Leave Feedback</h3>
            <form onSubmit={submitFeedback}>
                <textarea
                    value={feedback}
                    onChange={handleFeedbackChange}
                    placeholder="Enter your feedback here..."
                    className="w-full p-2 mb-4 border rounded"
                    required
                />
                <button type="submit" className="bg-blue-600 text-white p-2 rounded">
                    Submit Feedback
                </button>
            </form>
        </div>
    );
}

export default FeedbackComponent;

