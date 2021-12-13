import { Typography } from "@mui/material";
import React from "react";
import "./stylesheets/Sponsors.css";

export default function Sponsors({ isOn }) {
  return (
    <div className="sponsors">
      <div
        className="sponsors__title"
        style={{ backgroundColor: isOn ? "white" : "#181818" }}
      >
        <Typography variant="h4" style={{ color: isOn ? "black" : "#f3f3f3" }}>
          Sponsors
        </Typography>
      </div>
      <div
        className="all__sponsors"
        style={{ backgroundColor: isOn ? "white" : "#181818" }}
      ></div>
    </div>
  );
}
