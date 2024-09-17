import React from "react";
import { useLocation } from "react-router-dom";

const iframeStyle = {
  width: "100%",
  height: "100%",
  border: "none",
};

function Playground() {
  const location = useLocation();
  const { image } = location.state || {};
  const targetLink =
    "https://squeak.js.org/run/#url=https://raw.githubusercontent.com/agustincico/agustincico.github.io/master/" +
    image;

  return (
    <div
      style={{
        width: "99vw",
        height: "99vh",
      }}
    >
      <iframe
        title="playgroundFrame"
        style={iframeStyle}
        src={targetLink}
      ></iframe>
    </div>
  );
}

export default Playground;
