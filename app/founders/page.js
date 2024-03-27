//import "react";
import "./page.css";
import RootLayout from "../layout";
import Founder from "../../src/Founder_Main/Founder_Main.js";
import Founder_InfoCard from "../../src/Founder_Main/Founder_InfoCard/Founder_InfoCard.js";
export default function Founders() {
  return (
    <RootLayout>
      <Founder />
      <Founder_InfoCard
        imgURL="/founders-1.png"
        infoHeader="Our craftmanship"
        infoText="Mike and Mandy studied and honed their craft under the fireplace sensei Vik Von Blaze. Nothing gets delivered to a customer without their sign off."
      />

      <Founder_InfoCard
        imgURL="/founders-2.png"
        infoHeader="Our experience"
        infoText="Numbers don't lie - we've been around for 20+ years and have a long list of happy customers who gladly recommend us."
      />

      <Founder_InfoCard
        imgURL="/founders-3.png"
        infoHeader="Our guarantee"
        infoText="If you're not 100% satisfied we will fully refund your purchase. Also we offer free repairs for the first 20 years of ownership. Find that somewhere else!"
      />
    </RootLayout>
  );
}
