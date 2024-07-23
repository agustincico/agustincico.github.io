//@ts-nocheck
import React from "react";
import CEStyles from "../ClassroomExperiences.module.css";
import logoMecenazgo from "../assets/images/logo.mecenazgo.negro.png";


export default function Footer(props) {
  return (
    <div>
      <p className={`Text ${CEStyles.Centered}`}>Este proyecto cuenta con apoyo de:</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src={logoMecenazgo}
        style={{ width: "70%"}}
        alt="Logo Mecenazgo"
      />
      </div>
    </div>

  );
}
