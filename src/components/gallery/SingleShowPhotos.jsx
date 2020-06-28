import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export function SingleShowPhotos(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const {
        images
    } = props;

    return (
        <div className='single-show-photos'>
            <h4 className="section-name-heading">{images.title}</h4>
            <Gallery photos={images.photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                      <Carousel
                        currentIndex={currentImage}
                        views={images.photos.map(photo => ({
                            ...photo,
                            caption: photo.caption
                        }))}
                        hideControlsWhenIdle={100000}
                        showNavigationOnTouchDevice
                      />
                  </Modal>
                ) : null}
            </ModalGateway>
        </div>
    )
}
