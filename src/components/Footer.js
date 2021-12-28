import { Typography } from "@mui/material";
import React from "react";
import "./stylesheets/Footer.css";

export default function Footer({ isOn }) {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isOn ? "white" : "#181818",
        color: isOn ? "black" : "#f3f3f3",
      }}
    >
      <Typography variant="body2">
        &copy; COPYRIGHT 2022 HackCSI-2022
      </Typography>
    </footer>
  );
}
