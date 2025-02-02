//@ts-nocheck
import { useMessages } from "./MessageContext";
import { useState } from "react";

export default function Header() {
  const { locale, setLocale, otherLanguage } = useMessages();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        width: "100%",
        height: "5vh",
        paddingRight: "10px",
        fontFamily: "Pastel Crayon",
      }}
    >
      <span
        onClick={() => {
          locale === "es" ? setLocale("en") : setLocale("es");
        }}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        style={{
          color: isHovered ? "blue" : "black",
          cursor: "pointer",
        }}
      >
        {otherLanguage}
      </span>
    </div>
  );
}
