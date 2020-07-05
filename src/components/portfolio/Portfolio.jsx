import React, { useCallback, useState } from "react";
import { portfolioPhotos } from "./photos";
import { SingleShowPhotos } from '../shared/SingleShowPhotos';


export function Portfolio() {
    return (
      <div className="main-container portfolio">
          <h3 className="portfolio__title">PORTFOLIO</h3>

          <SingleShowPhotos
            images={portfolioPhotos}
            withPhotosTitle={false}
            withFigcaption={false}
          />
      </div>
    )
}