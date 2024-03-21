import "react";
import PropTypes from "prop-types";
import "./Info_Card.css";
import Image from "next/image";

export default function InfoCard({ imgURL, infoHeader, infoText }) {
  return (
    <>
      <section className="info-cards">
        <Image src={imgURL} alt="Image" width = {370} height = {370}/>
        <h2 className="info-header">{infoHeader}</h2>
        <p className="info-text">{infoText}</p>
      </section>
    </>
  );
}

InfoCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  infoHeader: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
};
