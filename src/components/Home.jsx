import React from "react";
import Helmet from "react-helmet";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Karol Drozd</title>
      </Helmet>
      <div className="home-page">
        <div className="landscape-container">
          <figure className="main__figure">
            <img
              src={require('../images/karol-drozd-main-black.jpg')}
              alt='Karol Drozd'
              className='main__figure--item'
            />
          </figure>
        </div>
      </div>
    </>
  );
}
