import "react";
import "./Hero.css";
import Image from "next/image";
import Link from "next/link";
//import heroDesktop from "../public/hero-desktop.png";

//created hero section with image and description
export default function Hero() {
  return (
    <>
      <Image src="/hero-desktop.png" alt="hero" width={370} height={370} />

      <div className="additional-info">
        <h1 id="add-info-header">Discover the Perfect Fireplace ...</h1>
        <p id="add-info-text">
          <Link href="/booking" className="link"> Book Consultation</Link>
        </p>
      </div>
    </>
  );
}
