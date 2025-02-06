//@ts-nocheck
import React from "react";
import { useMessages } from "./components/MessageContext";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Header from "./components/Header";
import homeStyles from "./Home.module.css";
import CEStyles from "./ClassroomExperiences.module.css";
import agurafamartinez from "./assets/images/profile/agurafamartinez.jpg";
import afernandezortuzar from "./assets/images/profile/afernandezortuzar.jpg";
import representacionSimbolica from "./assets/papers/Representacion-simbolica-y-materialismo-dialectico.pdf";
import integracionDelConocimiento from "./assets/papers/Integración_del_conocimiento_cientifico_y_materialismo_dialectico.pdf";

function Profile() {
  const currentUrl = window.location.href;
  const { messages } = useMessages();
  const navigate = useNavigate();
  const isAguRafaMartinez = currentUrl.includes("agurafamartinez");

  return (
    <>
      <Header></Header>
      <div className={CEStyles.Header}>
        <Button
          className={`Text ${homeStyles.CartonButton} ${homeStyles.TinyButton}`}
          onClick={() => {
            navigate("/");
          }}
          style={{ marginLeft: "1vw", marginTop: "1vh" }}
        >
          {messages.classroomExperiencesPage.homeButtonLabel}
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={isAguRafaMartinez ? agurafamartinez : afernandezortuzar}
            style={{
              width: isAguRafaMartinez ? "25%" : "21%",
              height: isAguRafaMartinez ? "25%" : "21%",
              borderRadius: "50%",
            }}
            alt="Foto de perfil"
          />
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className={`Text ${CEStyles.Subtitle} ${CEStyles.Centered} ${CEStyles.UnderlinedWithMargins}`}
            style={{ marginTop: "2vh", marginBottom: "5vh" }}
          >
            {isAguRafaMartinez
              ? messages.profilePage.agurafamartinez.title
              : messages.profilePage.afernandezortuzar.title}
          </div>
          <div className={`Text ${CEStyles.Description} ${CEStyles.Centered}`}>
            {isAguRafaMartinez
              ? messages.profilePage.agurafamartinez.description
              : messages.profilePage.afernandezortuzar.description}
          </div>
          {isAguRafaMartinez ? (
            <>
              <div
                className={`Text ${CEStyles.Subtitle} ${CEStyles.UnderlinedWithMargins}`}
              >
                <br />
                {messages.profilePage.agurafamartinez.presentations.title}
              </div>
              <ul className={`Text ${CEStyles.Description}`}>
                <li>
                  {
                    messages.profilePage.agurafamartinez.presentations
                      .smalltalks2024.title
                  }
                  <br />
                  <a
                    href={
                      messages.profilePage.agurafamartinez.presentations
                        .smalltalks2024.link
                    }
                  >
                    {
                      messages.profilePage.agurafamartinez.presentations
                        .smalltalks2024.linkText
                    }
                  </a>
                </li>
                <li>
                  {
                    messages.profilePage.agurafamartinez.presentations
                      .smalltalks2023.title
                  }
                  <br />
                  <a
                    href={
                      messages.profilePage.agurafamartinez.presentations
                        .smalltalks2023.link
                    }
                  >
                    {
                      messages.profilePage.agurafamartinez.presentations
                        .smalltalks2023.linkText
                    }
                  </a>
                </li>
                <li>
                  {
                    messages.profilePage.agurafamartinez.presentations
                      .splash2022.title
                  }
                  <br />
                  <a
                    href={
                      messages.profilePage.agurafamartinez.presentations
                        .splash2022.link
                    }
                  >
                    {
                      messages.profilePage.agurafamartinez.presentations
                        .splash2022.linkText
                    }
                  </a>
                </li>
              </ul>

              <div
                className={`Text ${CEStyles.Subtitle} ${CEStyles.UnderlinedWithMargins}`}
              >
                <br />
                {messages.profilePage.agurafamartinez.publications.title}
              </div>
              <ul className={`Text ${CEStyles.Description}`}>
                <li>
                  {
                    messages.profilePage.agurafamartinez.publications
                      .SymbolicRepresentationAndDialecticalMaterialism.title
                  }
                  <br />
                  <a
                    href={representacionSimbolica}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {
                      messages.profilePage.agurafamartinez.publications
                        .SymbolicRepresentationAndDialecticalMaterialism
                        .linkText
                    }
                  </a>
                </li>
                <li>
                  {
                    messages.profilePage.agurafamartinez.publications
                      .IntegrationOfScientificKnowledgeAndDialecticalMaterialism
                      .title
                  }
                  <br />
                  <a
                    href={integracionDelConocimiento}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {
                      messages.profilePage.agurafamartinez.publications
                        .IntegrationOfScientificKnowledgeAndDialecticalMaterialism
                        .linkText
                    }
                  </a>
                </li>
              </ul>

              <div
                className={`Text ${CEStyles.Subtitle} ${CEStyles.UnderlinedWithMargins}`}
              >
                <br />
                {messages.profilePage.agurafamartinez.artisticWorks.title}
              </div>
              <ul className={`Text ${CEStyles.Description}`}>
                <li>
                  {
                    messages.profilePage.agurafamartinez.artisticWorks
                      .naveCinetica.title
                  }
                  <br />
                  <a
                    href={
                      messages.profilePage.agurafamartinez.artisticWorks
                        .naveCinetica.link
                    }
                  >
                    {
                      messages.profilePage.agurafamartinez.artisticWorks
                        .naveCinetica.linkText
                    }
                  </a>
                </li>
                <li>
                  {
                    messages.profilePage.agurafamartinez.artisticWorks
                      .zuckerfabrik.title
                  }
                  <br />
                  <a
                    href={
                      messages.profilePage.agurafamartinez.artisticWorks
                        .zuckerfabrik.link
                    }
                  >
                    {
                      messages.profilePage.agurafamartinez.artisticWorks
                        .zuckerfabrik.linkText
                    }
                  </a>
                </li>
                <li>
                  {
                    messages.profilePage.agurafamartinez.artisticWorks
                      .rachelCorrie.title
                  }
                  <br />
                  <a
                    href={
                      messages.profilePage.agurafamartinez.artisticWorks
                        .rachelCorrie.link
                    }
                  >
                    {
                      messages.profilePage.agurafamartinez.artisticWorks
                        .rachelCorrie.linkText
                    }
                  </a>
                </li>
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Profile;
