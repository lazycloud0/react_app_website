import "react";
import "./Review.css";
import Review_Info from "./Review_Info/Review_Info.js";
import Buttons from "./Country_Btn/Country_Btn.js";

// review component with its children components Review Info and buttons
export default function Review() {
  return (
    <>
      <section className="review">
        <Review_Info />
        <Buttons />
      </section>
    </>
  );
}
