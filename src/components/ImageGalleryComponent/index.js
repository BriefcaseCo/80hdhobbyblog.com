import React, { useState } from 'react';

function ImageGalleryComponent({ imagePaths }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="image-gallery my-8">
            <h3 className="text-2xl font-bold text-center mb-4">Image Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {imagePaths.map((path, index) => (
                    <img 
                        key={index} 
                        src={path} 
                        alt={`Chapter scene ${index + 1}`} 
                        className="rounded cursor-pointer hover:opacity-80" 
                        onClick={() => openModal(path)}
                    />
                ))}
            </div>

            {/* Modal for selected image */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
                    <div className="bg-white p-2 rounded">
                        <img src={selectedImage} alt="Enlarged scene" className="max-h-full max-w-full" />
                        <button 
                            onClick={closeModal} 
                            className="absolute top-0 right-0 m-2 text-white text-2xl font-bold hover:text-gray-200"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageGalleryComponent;

