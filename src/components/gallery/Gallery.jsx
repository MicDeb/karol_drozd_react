import React from "react";
import { Container } from "react-bootstrap";
import { SingleShowPhotos } from './SingleShowPhotos';
import {
    rockOfAgesPhoto,
    operaZaTrzyGroszePhotos,
    crazyForYouPhotos,
    footloosePhotos,
    addamsFamilyPhotos,
    grimmPhotos,
    loveStoryPhotos,
    famePhotos
} from './photos';

export function Gallery() {
    return (
        <div className="main-container gallery-page">
            <h2 className="main-gallery-title">Karol Drozd - Galeria</h2>
            <div className="gallery">
                <h3 className="gallery-section-name">GALERIA</h3>

                <Container>
                    {/*Rock of Ages*/}
                    <SingleShowPhotos
                        images={rockOfAgesPhoto}
                    />

                    {/*Opera za Trzy grosze*/}
                    <SingleShowPhotos
                        images={operaZaTrzyGroszePhotos}
                    />

                    {/*Crazy For You*/}
                    <SingleShowPhotos
                        images={crazyForYouPhotos}
                    />

                    {/*Footloose*/}
                    <SingleShowPhotos
                        images={footloosePhotos}
                    />

                    {/*Rodzina Addamsów*/}
                    <SingleShowPhotos
                        images={addamsFamilyPhotos}
                    />

                    {/*GRIMM*/}
                    <SingleShowPhotos
                        images={grimmPhotos}
                    />

                    {/*Love Story*/}
                    <SingleShowPhotos
                        images={loveStoryPhotos}
                    />

                    {/*FAME*/}
                    <SingleShowPhotos
                        images={famePhotos}
                    />
                </Container>
            </div>
        </div>
    )
}