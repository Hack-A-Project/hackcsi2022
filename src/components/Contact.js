import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./stylesheets/Contact.css";
import { Typography } from "@mui/material";

export default function Contact() {
  const [state, handleSubmit] = useForm("mayazako");
  if (state.succeeded) {
    return (
      <div style={{ color: "white", textAlign: "center" }} className="contact">
        <p>We will get back to you as soon as possible!</p>
      </div>
    );
  }
  return (
    <div className="contact">
      <form className="form" onSubmit={handleSubmit}>
        <Typography className="contact__title" variant="h4">
          Got A Question?
        </Typography>
        <label htmlFor="name">First Name & Last Name</label>
        <input id="name" type="text" name="name" />
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br />
        <button
          className="submit__button"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
