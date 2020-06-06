import React from "react";

export function SingleShowPhotos(props) {
    const {
        singleShow
    } = props;
    return (
        <>
            <h4 className="section-name-heading">{singleShow.title}</h4>
            <div className="gallery gallery-container">
                {singleShow.photos.map((photo) => (
                    <figure className="gallery__photo">
                        <img
                            className="gallery__photo--item"
                            src={photo.src}
                            alt={photo.alt}
                        />
                        <figcaption className="gallery__photo--figcaption">
                            {photo.figcaption}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </>
    )
}