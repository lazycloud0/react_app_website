import "react";
import PropTypes from "prop-types";
import "./Founder_InfoCard.css";
import Image from "next/image";

// info card component with an image, header and info
export default function Founder_InfoCard({ imgURL, infoHeader, infoText }) {
  return (
    <>
      <section className="info-card">
        <h2 className="info-header">{infoHeader}</h2>
        <p className="info-text">{infoText}</p>
        <div className="img">
        <Image src={imgURL} alt="Image" width={350} height={212} />
        </div>
      </section>
    </>
  );
}

// prop types validation
Founder_InfoCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  infoHeader: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
};
