//import "react";
import "./page.css";
import RootLayout from "../layout";
import ContactForm from "../../src/ContactForm/ContactForm.js";

export default function Booking() {
  return (
    <RootLayout>
      <h1 className="heading">Design Booking</h1>
      <ContactForm />
    </RootLayout>
  );
}
