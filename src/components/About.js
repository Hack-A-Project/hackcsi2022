import React from "react";
import "./stylesheets/About.css";
import { Typography } from "@mui/material";

export default function About() {
  return (
    <div className="about">
      <img
        alt="ellipse"
        className="ellipse"
        src="https://res.cloudinary.com/andreahabib/image/upload/v1635172576/Ellipse_1_cae6w1.svg"
      ></img>
      <div className="top">
        <Typography variant="h3">HackCSI 2022</Typography>
        <Typography className="about__hackathon" variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Typography>
        <a
          className="apply__button"
          rel="noreferrer noopener"
          target="_blank"
          href="#void"
        >
          Apply Here
        </a>
      </div>
      <div className="bottom">
        <div className="title">
          <Typography variant="h3">ENDLESS POSSIBILITIES</Typography>
        </div>
        <div className="cards">
          <div className="card">
            <Typography variant="h4">Creativity</Typography>
            <div className="card__body">
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
          </div>
          <div className="card">
            <Typography variant="h4">Innovation</Typography>
            <div className="card__body">
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
          </div>
          <div className="card">
            <Typography variant="h4">Impact</Typography>
            <div className="card__body">
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
