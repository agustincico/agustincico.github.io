//@ts-nocheck
import React from "react";
import CEStyles from "../ClassroomExperiences.module.css";
import logoMecenazgo from "../assets/images/logo.mecenazgo.negro.png";
import logoTwitter from "../assets/images/twitter-x-logo.png";
import logoInstagram from "../assets/images/instagram-logo-with-text.png";
import { useMessages } from "./MessageContext";
import { Link } from "react-router-dom";

export default function Footer(props) {
  const { messages } = useMessages();
  return (
    <div>
      <p className={`Text ${CEStyles.ContactTitle}`}>Contacto</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link
          to="https://www.instagram.com/agurafamartinez/"
          style={{ width: "35%" }}
        >
          <img
            src={logoInstagram}
            style={{ width: "100%" }}
            alt="Logo Instagram"
          />
        </Link>
        <Link to="https://x.com/agurafamartinez" style={{ width: "10%" }}>
          <img src={logoTwitter} style={{ width: "100%" }} alt="Logo Twitter" />
        </Link>
      </div>
      <p className={`Text ${CEStyles.ContactText}`}>
        Si tenés preguntas sobre cómo usar la herramienta, si querés que tu
        institución sea sponsor del proyecto, no dejes de escribirnos:
      </p>
      <p className={`Text ${CEStyles.EmailText}`}>info@represent.ar</p>
      <p className={`Text ${CEStyles.ContactText}`}>
        Si querés ser parte de nuestra comunidad, compartir tus proyectos y
        experiencias, podés unirte a nuestra lista de mails escribiendo a:
      </p>
      <p className={`Text ${CEStyles.EmailGoogleGroupText}`}>
        representarCommunity+subscribe@googlegroups.com
      </p>
      <p className={`Text ${CEStyles.ContactText}`}>{messages.footer.title}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={logoMecenazgo}
          style={{ width: "30%" }}
          alt="Logo Mecenazgo"
        />
      </div>
    </div>
  );
}
