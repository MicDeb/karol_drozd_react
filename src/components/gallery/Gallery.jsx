import React from "react";
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
        <main className="main">
            <h2 className="main-gallery-title">Karol Drozd - Galeria</h2>
            <div className="main__container gallery">
                <h3 className="gallery-section-name">GALERIA</h3>

                {/*Rock of Ages*/}
                <SingleShowPhotos
                    singleShow={rockOfAgesPhoto}
                />

                {/*Opera za Trzy grosze*/}
                <SingleShowPhotos
                    singleShow={operaZaTrzyGroszePhotos}
                />

                {/*Crazy For You*/}
                <SingleShowPhotos
                    singleShow={crazyForYouPhotos}
                />

                {/*Footloose*/}
                <SingleShowPhotos
                    singleShow={footloosePhotos}
                />

                {/*Rodzina Addamsów*/}
                <SingleShowPhotos
                    singleShow={addamsFamilyPhotos}
                />

                {/*GRIMM*/}
                <SingleShowPhotos
                    singleShow={grimmPhotos}
                />

                {/*Love Story*/}
                <SingleShowPhotos
                    singleShow={loveStoryPhotos}
                />

                {/*FAME*/}
                <SingleShowPhotos
                    singleShow={famePhotos}
                />
            </div>
        </main>
    )
}