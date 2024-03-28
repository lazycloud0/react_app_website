"use client";

import "./ContactForm.css";
import { useReducer } from "react";
import { initial_state, reducer } from "./ContactFormReducer.js";
import Image from "next/image";

// MVP 1
// —> Refactor existing useState codes to reducer function
// —> Create state object ✅
// —> Create reducer function - switch cases with various function  ✅
// —> update handleChange - with dispatch actions  ✅
// —> update variables in JSX ✅
// —> check if everything works ✅

// MVP 2
// --> input validation
// --> "empty-input" action created ✅
// --> implement dispatch in handleSubmit ✅
// --> error message added in JSX ✅
// --> checked if everything works✅

// --> postcode validation
// --> define actions for postcode validation: ✅
// --> "FETCH_START" ✅
// --> "FETCH_SUCCESS" ✅
// --> "FETCH_ERROR" ✅
// --> create handleFetch function ✅
// --> implement dispatch in handleFetch function ✅
// --> update JSX <button onClick={handleFetch}> ✅
// --> loading status message ✅
// --> checked if everything works ✅

// MVP 3
// --> upon successful validation and submission
// --> introduce logic to show success message ✅
// --> update jsx code with appropriate conditions ✅
// --> to either show the form ✅
// --> to hide form and show success message ✅

// MVP 4
// --> founders page ✅
// --> fintune website's CSS ✅

export default function ContactForm() {
  // created state object in reducer.js

  //calling reducer function
  // switch cases with various actions
  const [state, dispatch] = useReducer(reducer, initial_state);

  //update handleChange function
  function handleChange(e) {
    console.log("changed");
    // dispatch actions
    dispatch({
      type: "CHANGE_FORM_DATA",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  }

  //update handleSubmit function
  function handleSubmit(e) {
    e.preventDefault();
    // if all input fields are filled
    if (
      state.name &&
      state.postcode &&
      state.address &&
      state.city &&
      state.phoneNumber &&
      state.email
    ) {
      dispatch({
        type: "SUBMIT_FORM_DATA",
        payload: {
          name: e.target.name,
          value: e.target.value,
        },
      });
    }
    // if there are missing input fields
    if (
      !state.name ||
      !state.postcode ||
      !state.address ||
      !state.city ||
      !state.phoneNumber ||
      !state.email
    ) {
      dispatch({
        type: "EMPTY_INPUT",
        payload: {
          name: e.target.name,
          value: e.target.value,
        },
      });
    }
  }

  // create handleFetch function to check postcode with external API
  async function handleFetch() {
    // fetch data
    if (!state.errorStatus) {
      dispatch({ type: "FETCH_START" });
    }
    try {
      // fetching postcode data from external API
      const res = await fetch(
        `https://postcodes.io/postcodes/${state.postcode}`
      );
      const data = await res.json();
      const country = data.result.country;

      // validating the countries
      if (
        country === "England" ||
        country === "Wales" ||
        country === "Scotland"
      ) {
        // upon success: => FETCH SUCCESS
        dispatch({ type: "FETCH_SUCCESS" });
      } else {
        // upon error: => FETCH ERROR
        dispatch({ type: "FETCH_ERROR" });
      }
      // error handling
    } catch (err) {
      dispatch({ type: "FETCH_ERROR" });
    }
  }

  // update JSX attributes -- values
  return (
    <>
      {!state.loading &&
      !state.errorStatus &&
      !state.apiError &&
      !state.unfilled ? (
        <>
          <div className="submitted-div">
            <p className="success-message">Your form has been submitted</p>
            <Image src="/excited.gif" alt="excited" width={370} height={289} />
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <h1 className="form-headers">Personal Information</h1>
          <div className="form-div">
            <label htmlFor="name" className="labels-inputs">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="labels-inputs"
              onChange={handleChange}
            />
            <label htmlFor="postcode" className="labels-inputs">
              Postcode
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              className="labels-inputs"
              onChange={handleChange}
            />
            <label htmlFor="address" className="labels-inputs">
              House/Flat Number and Street Name
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="labels-inputs"
              onChange={handleChange}
            />
            <label htmlFor="city" className="labels-inputs">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="labels-inputs"
              onChange={handleChange}
            />
          </div>
          <h1 className="form-headers">Contact Information</h1>
          <div className="form-div">
            <label htmlFor="phoneNumber" className="labels-inputs">
              Phone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              className="labels-inputs"
              onChange={handleChange}
            />
            <label htmlFor="email" className="labels-inputs">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="labels-inputs"
              onChange={handleChange}
            />
          </div>
          {state.errorStatus && (
            <p className="status">There are empty fields</p>
          )}
          {/* loading and error status message */}
          {state.loading && !state.errorStatus && (
            <p className="status">Validating postcode</p>
          )}
          {state.apiError && !state.errorStatus && (
            <p className="status">Invalid postcode</p>
          )}

          <div className="bigger-button-div">
            <div className="button-div">
              <button
                type="submit"
                className="submit-button"
                // added handleFetch to button
                onClick={handleFetch}
              >
                Request Design Consultation
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
