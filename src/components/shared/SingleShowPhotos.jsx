import React, { useState, useCallback } from "react";
import PropTypes from 'prop-types';
import Carousel, { Modal, ModalGateway } from "react-images";
import {
  Row,
  Col,
} from 'react-bootstrap';

export function SingleShowPhotos(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const rootElement = document.getElementById('root');

    const openLightbox = useCallback((index) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
      rootElement.classList.add('modal-visible');
    }, [rootElement.classList]);

    const closeLightbox = useCallback(() => {
      setCurrentImage(0);
      setViewerIsOpen(false);
      rootElement.classList.remove('modal-visible');
    }, [rootElement.classList]);

    const {
      images,
      withPhotosTitle,
      withFigcaption,
    } = props;

    return (
        <div className='single-show-photos'>
          {withPhotosTitle
            && (
              <h4 className="single-show-photos__title">{images.title}</h4>
            )
          }
            <Row noGutters>
              {images.photos.map((photo, index) => (
                <Col {...photo.sizes} key={photo.src}>
                  <figure className='photo-container'>
                    <img
                      src={photo.src}
                      onClick={() => openLightbox(index)}
                      alt={photo.alt}
                    />
                    {withFigcaption
                      && (
                        <figcaption>
                          {photo.caption}
                        </figcaption>
                      )
                    }

                  </figure>
                </Col>
              ))}
            </Row>
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

SingleShowPhotos.defaultProps = {
  withPhotosTitle: true,
  withFigcaption: true,
}

SingleShowPhotos.propTypes = {
  withPhotosTitle: PropTypes.bool,
  withFigcaption: PropTypes.bool,
}
