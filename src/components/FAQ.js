import { Typography } from "@mui/material";
import React from "react";
import "./stylesheets/FAQ.css";

export default function FAQ() {
  return (
    <div className="faq">
      <div className="faq__top">
        <div className="top__faq">
          <Typography className="faq__top_text" variant="h5">
            Frequently Asked Question {""}
            <span>&#8594;</span>
          </Typography>
        </div>
      </div>
    </div>
  );
}
