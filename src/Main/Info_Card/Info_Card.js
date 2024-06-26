import "react";
import PropTypes from "prop-types";
import "./Info_Card.css";
import Image from "next/image";

// info card component with an image, header and info
export default function InfoCard({ imgURL, infoHeader, infoText }) {
  return (
    <>
      <section className="info-card">
        <Image src={imgURL} alt="Image" width = {370} height = {370}/>
        <h2 className="info-header">{infoHeader}</h2>
        <p className="info-text">{infoText}</p>
      </section>
    </>
  );
}

// prop types validation 
InfoCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  infoHeader: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
};
