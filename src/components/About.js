import React from "react";
import "./stylesheets/About.css";
import { Typography } from "@mui/material";
import { LightSwitch } from ".";

export default function About({ isOn, setIsOn }) {
  return (
    <div
      className="about"
      style={{ backgroundColor: isOn ? "white" : "#181818" }}
    >
      <div style={{ paddingTop: 40, paddingLeft: 30 }}>
        <LightSwitch isOn={isOn} setIsOn={setIsOn} />
      </div>
      <img
        alt="ellipse"
        className="ellipse"
        src="https://res.cloudinary.com/andreahabib/image/upload/v1635172576/Ellipse_1_cae6w1.svg"
      ></img>
      <div className="top">
        <img
          alt="logo"
          className="logo"
          src="https://res.cloudinary.com/andreahabib/image/upload/v1635171987/Hackcsi_2022_2_haehnz.svg"
        />
        <Typography
          className="about__hackathon"
          variant="body1"
          style={{ color: isOn ? "black" : "#f3f3f3" }}
        >
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
        <Typography className="arrow" variant="h3">
          &#8595;
        </Typography>
        <img
          className="ellipse3"
          alt="ellpise3"
          src="https://res.cloudinary.com/andreahabib/image/upload/v1635201608/Ellipse_3_gvigno.svg"
        />
      </div>
      <div className="bottom">
        <div className="title">
          <Typography variant="h3">ENDLESS POSSIBILITIES</Typography>
        </div>
        <div className="cards">
          <div
            className="card"
            style={{
              backgroundColor: isOn ? "white" : "#181818",
              color: isOn ? "black" : "#f3f3f3",
            }}
          >
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
          <div
            className="card"
            style={{
              backgroundColor: isOn ? "white" : "#181818",
              color: isOn ? "black" : "#f3f3f3",
            }}
          >
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
          <div
            className="card"
            style={{
              backgroundColor: isOn ? "white" : "#181818",
              color: isOn ? "black" : "#f3f3f3",
            }}
          >
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
