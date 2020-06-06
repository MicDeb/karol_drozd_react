import React from "react";

export function Home() {
    return (
        <main className="main home-page">
            <h2>Main section</h2>
            <div className="main__container home">
                <div className="landscape-container">
                    <figure className="main__figure">
                        <img
                            src="images/karol-drozd-main.jpg"
                            alt="Karol Drozd portret"
                            className="main__figure--img desktop-large"
                        />
                    </figure>
                </div>
            </div>
        </main>
    )
}