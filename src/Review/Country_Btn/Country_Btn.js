"use client";

import React, { useState, useEffect } from "react";
import "./Country_Btn.css";

export default function Buttons() {
  const [country, setCountry] = useState({
    current: "",
    shown: false,
  });
  const [reviews, setReviews] = useState([]);
  console.log(country);

  useEffect(() => {
    if (country.current && country.shown) {
      fetch(
        `https://seal-app-336e8.ondigitalocean.app/reviews?country=${country.current}`
      )
        .then((response) => response.json())
        .then((json) => setReviews(json));
    }
    // const fetchData = async () => {
    //   const response = await fetch(
    //     `https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`,
    //     {
    //       header: {
    //         Accept: "application/json",
    //       },
    //     }
    //   );

    //   if (!response.ok) {
    //     console.error(response.status);
    //     console.error(response.text());
    //   }
    //   reviews = await response.json();
    //   console.log(reviews);
    // };
    // fetchData();
  }, [country]);

  const handleClick = (current) => {
    const isSameCountry = country.current === current;
    const shown = isSameCountry ? !country.shown : true;

    setCountry({ current, shown });
  };

  return (
    <>
      <div className="button-section">
        <button onClick={() => handleClick("england")}>England</button>
        <button onClick={() => handleClick("wales")}>Wales</button>
        <button onClick={() => handleClick("scotland")}>Scotland</button>
      </div>
      {reviews && (
        <div className="reviewText">
          <p>{reviews.text}</p>
        </div>
      )}
      {reviews && (
        <div className="reviewText">
          <p>{reviews.author}</p>
        </div>
      )}
      {reviews && (
        <div className="reviewText">
          <p>{reviews.location}</p>
        </div>
      )}
    </>
  );
}
