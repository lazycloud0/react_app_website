"use client";

import React, { useState, useEffect } from "react";
import "./Country_Btn.css";

// created 3 buttons - England / Wales / Scotland ✅
// user: when click on a country button
// button changes to orange ✅
// fetch relative data when str = {country} ✅
// reviews displayed ✅
// user: click other buttons
// button swaps colors ✅
// reviews would be updated to corresponding country✅
// user: click on same button
// button changes back to grey ✅
// review hidden ✅

export default function Buttons() {
  // define useState variables
  const [country, setCountry] = useState({
    current: "",
    shown: false,
  });
  const [reviews, setReviews] = useState([]);
  const [isClicked, setIsClicked] = useState("");
  console.log(country);

  // useEffect triggering data fetching from API
  useEffect(() => {
    if (country.current && country.shown) {
      fetch(
        `https://seal-app-336e8.ondigitalocean.app/reviews?country=${country.current}`
      )
        .then((response) => response.json())
        .then((json) => setReviews(json));
    }
  }, [country]);

  // click handler function
  // toggle visibility if the same country is clicked
  const handleClick = (current) => {
    const isSameCountry = country.current === current;
    const shown = isSameCountry ? !country.shown : true;

    setCountry({ current, shown });
    setIsClicked(current);

    if (isSameCountry && !shown) {
      setReviews([]); // reset and clean up data
      setIsClicked(""); // reset and clean up data
    }
  };

  // create 3 buttons - England / Wales / Scotland
  // on click trigger handleClick function
  // turns orange when clicked
  // if there's data, display the relevant reviews with author and location
  return (
    <>
      <div className="button-section">
        <button
          className={isClicked === "england" ? "button-active" : "button"}
          onClick={() => handleClick("england")}
        >
          England
        </button>
        <button
          className={isClicked === "wales" ? "button-active" : "button"}
          onClick={() => handleClick("wales")}
        >
          Wales
        </button>
        <button
          className={isClicked === "scotland" ? "button-active" : "button"}
          onClick={() => handleClick("scotland")}
        >
          Scotland
        </button>
      </div>
      {reviews && isClicked !== "" && (
        <div className="reviewText">
          <p>{reviews.text}</p>
        </div>
      )}
      {reviews && isClicked !== "" && (
        <div className="reviewInfo">
          <p className="info">
            {reviews.author}-{reviews.location}
          </p>
        </div>
      )}
    </>
  );
}
