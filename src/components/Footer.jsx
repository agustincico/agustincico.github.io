//@ts-nocheck
import React from "react";
import CEStyles from "../ClassroomExperiences.module.css";
import logoMecenazgo from "../assets/images/logo.mecenazgo.negro.png";
import { useMessages } from "./MessageContext";

export default function Footer(props) {
  const { messages } = useMessages();
  return (
    <div>
      <p className={`Text ${CEStyles.Centered}`}>{messages.footer.title}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={logoMecenazgo}
          style={{ width: "70%" }}
          alt="Logo Mecenazgo"
        />
      </div>
    </div>
  );
}
