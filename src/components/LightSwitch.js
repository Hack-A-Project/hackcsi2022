import React from "react";
import { motion, useAnimation } from "framer-motion";
import sun from "../assets/sun_u.png";
import moon from "../assets/moon_u.png";

const LightSwitch = ({ isOn, setIsOn }) => {
  const controls = useAnimation();

  return (
    <div
      className="LightSwitchWrapper"
      onClick={() => {
        console.log(isOn);
        if (isOn) {
          controls.start({
            x: 60,
            transition: {
              duration: 0.2,
              type: "spring",
              damping: 12,
            },
          });
        } else {
          controls.start({
            x: 5,
            transition: {
              duration: 0.2,
              type: "spring",
              damping: 12,
            },
          });
        }
        setIsOn(!isOn);
      }}
      style={{
        width: 100,
        height: 40,
        borderRadius: 40,
        backgroundImage: isOn ? `url(${sun})` : `url(${moon})`,
      }}
    >
      <motion.div
        className="LightSwitchToggle"
        animate={controls}
        initial={{ x: 5, y: 2 }}
        style={{
          backgroundColor: isOn ? "white" : "black",
          width: 35,
          height: 35,
          borderRadius: 40,
        }}
      />
    </div>
  );
};

export default LightSwitch;
