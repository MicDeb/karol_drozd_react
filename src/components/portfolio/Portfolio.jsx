import React from 'react';
import Helmet from 'react-helmet';
import { portfolioPhotos } from './photos';
import { SingleShowPhotos } from '../shared/SingleShowPhotos';


export function Portfolio() {
  return (
    <>
      <Helmet>
        <title>PORTFOLIO | Karol Drozd</title>
      </Helmet>

      <div className='main-container portfolio'>
        <h3 className='portfolio__title'>PORTFOLIO</h3>

        <SingleShowPhotos
          images={portfolioPhotos}
          withPhotosTitle={false}
          withFigcaption={false}
        />
      </div>
    </>
  );
}