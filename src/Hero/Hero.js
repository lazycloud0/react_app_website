import "react";
import "./Hero.css";
import Image from "next/image";
//import heroDesktop from "../public/hero-mobile.png";

export default function Hero() {
  return (
    <>
      <Image src="/hero-desktop.png" alt="hero" width={370} height={370} />

      <div className="additional-info">
        <h1 id="add-info-header">Discover the Perfect Fireplace ...</h1>
        <p id="add-info-text">
          Book a consultation: <span>0121 345 6789</span>
        </p>
      </div>
    </>
  );
}
