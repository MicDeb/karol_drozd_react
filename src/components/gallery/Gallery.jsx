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
        <div className="main-container gallery">
            <h3 className="gallery__title">GALERIA</h3>

            <div>
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
            </div>
        </div>
    )
}