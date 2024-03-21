"use client";

import React, { useState, useEffect } from "react";
import "./Country_Btn.css";

export default function Buttons() {
  const [country, setCountry] = useState(null);

  console.log(country);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`,
        {
          header: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        console.error(response.status);
        console.error(response.text());
      }
      const reviews = await response.json();
      console.log(reviews);
      return reviews;
    };
    fetchData();
  }, [country]);

  function handleClick() {
    console.log("clicked");
    setCountry(country);
  }

  return (
    <>
      <div className="button-section">
        <button onClick={() => setCountry("england")}>England</button>
        <button onClick={() => setCountry("wales")}>Wales</button>
        <button onClick={() => setCountry("scotland")}>Scotland</button>
      </div>
    </>
  );
}
