import { Typography } from "@mui/material";
import React from "react";
import "./stylesheets/FAQ.css";

export default function FAQ() {
  return (
    <div className="faq__container">
      <div className="faq__top">
        <div className="top__faq">
          <Typography className="faq__top_text" variant="h5">
            Frequently Asked Question {""}
            <span>&#8594;</span>
          </Typography>
        </div>
      </div>
      <div className="faq__cards">
        <div className="faq">
          <Typography variant="h5">What is a Hackathon?</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Typography>
        </div>
        <div className="faq">
          <Typography variant="h5">What is a Hackathon?</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Typography>
        </div>
        <div className="faq">
          <Typography variant="h5">What is a Hackathon?</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Typography>
        </div>
        <div className="faq">
          <Typography variant="h5">What is a Hackathon?</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Typography>
        </div>
      </div>
    </div>
  );
}
