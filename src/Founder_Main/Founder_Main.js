import "react";
import "./Founder_Main.css";
import Image from "next/image";

//created founder hero section with image and description
export default function Founder() {
  return (
    <>
      <div className="founder-hero">
        <h1 id="founder-text">Meet the artisans behind our masterpieces!</h1>
        <h1 id="founder">Mike and Mandy</h1>
        <Image
          src="/founder-mike-and-mandy.png"
          alt="hero"
          width={350}
          height={350}
        />
      </div>
    </>
  );
}
