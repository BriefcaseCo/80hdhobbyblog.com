import React, { useState } from 'react';

function ContactFormComponent() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, like sending an email or saving to a database
        console.log(formData);
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' }); // Reset form after submission
    };

    return (
        <div className="contact-form my-8 p-6 bg-white rounded shadow-md max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Contact Us</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-2 mb-4 border rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-2 mb-4 border rounded"
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full p-2 mb-4 border rounded"
                    required
                />
                <button type="submit" className="bg-blue-600 text-white p-2 rounded">
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default ContactFormComponent;

