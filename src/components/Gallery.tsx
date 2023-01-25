
import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { galleryImages } from '../constants/ImageGalleryConstants';

import "./Gallery.css";

function Gallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const images = galleryImages.map(galleryImage => {
        return require(`../media/images/${galleryImage.fileName}`);
    })
    
    const openImageViewer = useCallback((index: React.SetStateAction<number>) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    
    return (
        <div className="Gallery">
            {images.map((src, index) => (
                <div className="GalleryImageContainer">
                    <img
                        src={ src }
                        onClick={ () => openImageViewer(index) }
                        width="300"
                        key={ index }
                        style={{ margin: '2px', objectFit: 'contain' }}
                        alt={galleryImages[index].altText}
                    />
                </div>
            ))}

            {isViewerOpen && (
                <ImageViewer
                    src={ images }
                    currentIndex={ currentImage }
                    disableScroll={ false }
                    closeOnClickOutside={ true }
                    onClose={ closeImageViewer }
                />
            )}
        </div>
    );
}

export default Gallery;