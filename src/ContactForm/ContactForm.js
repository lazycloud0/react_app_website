"use client";

import "./ContactForm.css";
import { useReducer } from "react";
import { initial_state, reducer } from "./ContactFormReducer.js";

// —> Refactor existing useState codes to reducer function
// —> Create state object ✅
// —> Create reducer function - switch cases with various function  ✅
// —> update handleChange - with dispatch actions  ✅
// —> update variables in JSX ✅
// —> check if everything works ✅

// --> input validation
// --> "empty-input" action created ✅
// --> implement dispatch in handleSubmit ✅
// --> error message added in JSX ✅
// --> checked if everything works✅

export default function ContactForm() {
  // created state object in reducer component

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

    //console.log(
    //`Name: ${state.data.name}, Postcode: ${state.data.postcode}, Address: ${state.data.address}, City: ${state.data.city}, Phone ///Number: ${state.data.phoneNumber}, Email Address ${state.data.emailAddress}`
    //);
  }

  // update JSX attributes -- values
  return (
    <>
      <form onSubmit={handleSubmit}>
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
            //value={state.data.name}
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
            //value={state.data.postcode}
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
            //value={state.data.address}
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
            //value={state.data.city}
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
            //value={state.data.phoneNumber}
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
            //value={state.data.emailAddress}
            onChange={handleChange}
          />
        </div>
        {state.errorStatus && <p>There are empty fields</p>}
        <div className="bigger-button-div">
          <div className="button-div">
            <button type="submit" className="submit-button">
              Request Design Consultation
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
