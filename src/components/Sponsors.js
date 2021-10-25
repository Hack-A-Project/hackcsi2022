import { Typography } from "@mui/material";
import React from "react";
import "./stylesheets/Sponsors.css";

export default function Sponsors() {
  return (
    <div className="sponsors">
      <div className="sponsors__title">
        <Typography variant="h4">Sponsors</Typography>
      </div>
      <div className="all__sponsors"></div>
    </div>
  );
}
