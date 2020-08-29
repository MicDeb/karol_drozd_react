import React from "react";
import Helmet from "react-helmet";

export function Contact() {
  return (
    <>
      <Helmet>
        <title>KONTAKT | Karol Drozd</title>
      </Helmet>
      <div className="contact">
        <h3 className="contact__title">KONTAKT</h3>
        <h4 className="contact__email">info.karoldrozd@gmail.com</h4>
      </div>
    </>
  );
}