import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import {
  Row,
  Col,
  Figure,
} from 'react-bootstrap';

export function SingleShowPhotos(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((index) => {
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
            <h4 className="single-show-photos__title">{images.title}</h4>
            <Row noGutters xs={2} md={3} lg={4}>
              {images.photos.map((photo, index) => (
                <Col {...photo.sizes} key={photo.src}>
                  <Figure className='photo-container'>
                    <Figure.Image
                      src={photo.src}
                      onClick={() => openLightbox(index)}
                    />
                    <Figure.Caption>
                      {photo.caption}
                    </Figure.Caption>
                  </Figure>
                </Col>
              ))}
            </Row>
            {/*<Gallery photos={images.photos} onClick={openLightbox} />*/}
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
