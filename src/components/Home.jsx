import React from "react";
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage';

export function Home() {
    return (
        <main className="main home-page">
            <h2>Main section</h2>
            <div className="main__container home">
                <div className="landscape-container">
                  <Figure className="main__figure">
                    <FigureImage
                      src={require('../images/karol-drozd-main-black.jpg')}
                      className='main__figure--item'
                    />
                  </Figure>
                </div>
            </div>
        </main>
    )
}