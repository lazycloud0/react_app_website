import "react";
import "./Main.css";
import HeaderMain from "./Header_Main/Header_Main.js";
import InfoCard from "./Info_Card/Info_Card.js";

// called children elements Header and InfoCards with various props
export default function Main() {
  return (
    <>
      <main>
        <HeaderMain />

        <InfoCard
          imgURL="/how-it-works-1.png"
          infoHeader="Give us a call ..."
          infoText='Call us and book in a "Design Consultation" on a date and time to suit
          you.'
        />

        <InfoCard
          imgURL="/how-it-works-2.png"
          infoHeader="We come to you ..."
          infoText="We come to your home and do an assessment of the space and to your
          style preference."
        />

        <InfoCard
          imgURL="/how-it-works-3.png"
          infoHeader="We recommend ..."
          infoText="We send you a bespoke set of fireplace recommendations."
        />
      </main>
    </>
  );
}
