import React from "react";

export function Home() {
  return (
    <div className="home-page">
      <div className="landscape-container">
        <figure className="main__figure">
          <img
            src={require('../images/karol-drozd-main-black.jpg')}
            className='main__figure--item'
          />
        </figure>
      </div>
    </div>
  );
}
