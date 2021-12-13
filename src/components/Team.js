import { Typography } from "@mui/material";
import React from "react";
import "./stylesheets/Team.css";

export default function Team({ isOn }) {
  return (
    <div
      className="team"
      style={{
        backgroundColor: isOn ? "white" : "#181818",
        color: isOn ? "black" : "#f3f3f3",
      }}
    >
      <img
        className="left__ellpise"
        alt="ellpise"
        src="https://res.cloudinary.com/andreahabib/image/upload/v1635192530/Ellipse_2_pd3seq.svg"
      />
      <div className="team__cards">
        <Typography variant="h4">Organizing Team</Typography>
        <div className="organizers">
          <div className="organizer">
            <img
              alt="avatar"
              className="avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            ></img>
            <Typography className="name" variant="h5">
              First Last
            </Typography>
            <span>
              <img
                alt="github"
                src="https://img.icons8.com/color/48/000000/github--v1.png"
              />
              <img
                alt="linkedin"
                src="https://img.icons8.com/fluency/48/000000/linkedin.png"
              />
            </span>
          </div>
          <div className="organizer">
            <img
              alt="avatar"
              className="avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            ></img>
            <Typography className="name" variant="h5">
              First Last
            </Typography>
            <span>
              <img
                alt="github"
                src="https://img.icons8.com/color/48/000000/github--v1.png"
              />
              <img
                alt="linkedin"
                src="https://img.icons8.com/fluency/48/000000/linkedin.png"
              />
            </span>
          </div>
          <div className="organizer">
            <img
              alt="avatar"
              className="avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            ></img>
            <Typography className="name" variant="h5">
              First Last
            </Typography>
            <span>
              <img
                alt="github"
                src="https://img.icons8.com/color/48/000000/github--v1.png"
              />
              <img
                alt="linkedin"
                src="https://img.icons8.com/fluency/48/000000/linkedin.png"
              />
            </span>
          </div>
          <div className="organizer">
            <img
              alt="avatar"
              className="avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            ></img>
            <Typography className="name" variant="h5">
              First Last
            </Typography>
            <span>
              <img
                alt="github"
                src="https://img.icons8.com/color/48/000000/github--v1.png"
              />
              <img
                alt="linkedin"
                src="https://img.icons8.com/fluency/48/000000/linkedin.png"
              />
            </span>
          </div>
          <div className="organizer">
            <img
              alt="avatar"
              className="avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            ></img>
            <Typography className="name" variant="h5">
              First Last
            </Typography>
            <span>
              <img
                alt="github"
                src="https://img.icons8.com/color/48/000000/github--v1.png"
              />
              <img
                alt="linkedin"
                src="https://img.icons8.com/fluency/48/000000/linkedin.png"
              />
            </span>
          </div>
          <div className="organizer">
            <img
              alt="avatar"
              className="avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            ></img>
            <Typography className="name" variant="h5">
              First Last
            </Typography>
            <span>
              <img
                alt="github"
                src="https://img.icons8.com/color/48/000000/github--v1.png"
              />
              <img
                alt="linkedin"
                src="https://img.icons8.com/fluency/48/000000/linkedin.png"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
