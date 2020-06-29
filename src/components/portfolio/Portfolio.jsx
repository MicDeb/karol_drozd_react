import React, { useCallback, useState } from "react";
import { portfolioPhotos } from "./photos";
import { Col, Figure, Row } from "react-bootstrap";
import Carousel, { Modal, ModalGateway } from "react-images";

export function Portfolio() {
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

    return (
      <div className="main-container portfolio">
          <h3 className="portfolio__title">PORTFOLIO</h3>

          <div className='single-show-photos'>
              <Row noGutters xs={2} md={3} lg={4}>
                  {portfolioPhotos.map((photo, index) => (
                    <Col {...photo.sizes} key={photo.src}>
                        <Figure className='photo-container'>
                            <Figure.Image
                              src={photo.src}
                              onClick={() => openLightbox(index)}
                            />
                        </Figure>
                    </Col>
                  ))}
              </Row>
              <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                          currentIndex={currentImage}
                          views={portfolioPhotos.map(photo => ({
                              ...photo,
                          }))}
                          hideControlsWhenIdle={100000}
                          showNavigationOnTouchDevice
                        />
                    </Modal>
                  ) : null}
              </ModalGateway>
          </div>
      </div>
    )
}