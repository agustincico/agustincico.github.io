//@ts-nocheck
import "./App.css";
import homeStyles from "./Home.module.css";
import "./style.css";
import React from "react";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";
import { useMessages } from "./components/MessageContext";
// import englishManual from "./assets/manuals/Manual.Representar.english.pdf";
// import spanishManual from "./assets/manuals/Manual.Representar.español.pdf";
import agurafamartinez from "./assets/images/profile/agurafamartinez.jpg";
import afernandezortuzar from "./assets/images/profile/afernandezortuzar.jpg";

function Home() {
  const navigate = useNavigate();
  const { messages, locale } = useMessages();
  // const imageTecnoLiteraturaPath =
  // "public/imagenSmalltalk&files=[Tecnoliteratura.image]&forceDownload=true";
  const imageDibujosWithExamplePath =
    "public/imagenSmalltalk/online&files=[RepresentarOnline" +
    (locale === "es" ? "" : ".EN") +
    ".image,KingFrogSample/projectToLoad.represent.ar]&forceDownload=true";
  // const imageDibujosEmptyPath =
  //   "public/imagenSmalltalk/online&files=[RepresentarOnline" +
  //   (locale === "es" ? "" : ".EN") +
  //   ".image,EmptySample/projectToLoad.represent.ar]&forceDownload=true";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div className={homeStyles.TitleContainer}>
        <div className={`Text ${homeStyles.MainTitle}`}>
          {messages.homePage.title}
        </div>
        <div className={`Text ${homeStyles.Introduction}`}>
          {messages.homePage.introduction}
        </div>
      </div>
      <div className={homeStyles.RowContainer2}>
        <Button
          className={`Text ${homeStyles.CartonButton} ${homeStyles.MiddleButton} ${homeStyles.DownloadButton}`}
          onClick={() => {
            const link = document.createElement("a");
            link.href = "imagenSmalltalk/RepresentarDesktop.zip"; //tocar aca cuando se actualiza la versión de descarga
            link.download = "Representar.zip";
            link.click();
          }}
        >
          {messages.homePage.downloadButtonLabel}
        </Button>
      </div>
      <div className={`Text ${homeStyles.Epigraph}`}>
        {messages.homePage.downloadButtonEpigraph}
      </div>
      <div className={homeStyles.RowContainer1}>
        {/* <Button
          className={`Text ${homeStyles.CartonButton} ${homeStyles.LeftMostButton} ${homeStyles.DownloadManualButton}`}
          onClick={() => {
            const link = document.createElement("a");
            link.href = locale === "en" ? englishManual : spanishManual;
            link.download = messages.homePage.manualFileName;
            link.click();
          }}
        >
          {messages.homePage.downloadManualButtonLabel}
        </Button> */}
        <Button
          className={`Text ${homeStyles.CartonButton} ${homeStyles.LeftMostButton} ${homeStyles.TryOnlineButton}`}
          onClick={() => {
            navigate("/programming-with-drawings-example", {
              state: { image: imageDibujosWithExamplePath },
            });
          }}
        >
          {messages.homePage.drawingsProgrammingExampleButtonLabel}
        </Button>
        <Button
          className={`Text ${homeStyles.CartonButton} ${homeStyles.RightMostButton} ${homeStyles.ClassroomExperiencesButton}`}
          onClick={() => {
            navigate("/classroom-experiences");
          }}
        >
          {messages.homePage.classroomExperiencesButtonLabel}
        </Button>
      </div>
      {/* <div className={homeStyles.RowContainer1}>
        <Button
          className={`Text ${homeStyles.CartonButton} ${homeStyles.LeftMostButton} ${homeStyles.TryOnlineButton}`}
          onClick={() => {
            navigate("/programming-with-drawings", {
              state: { image: imageDibujosEmptyPath },
            });
          }}
        >
          {messages.homePage.drawingsProgrammingButtonLabel}
        </Button>
      
      </div> */}
      {/* <div className={homeStyles.RowContainer2}>
        <Button
          className={`Text ${homeStyles.CartonButton} ${homeStyles.TecnoLiteraturaButton}`}
          onClick={() => {
            navigate("/tecno-literature", {
              state: { image: imageTecnoLiteraturaPath },
            });
          }}
        >
          {messages.homePage.tecnoLiteraturaButtonLabel}
        </Button>
      </div> */}
      <div className={`${homeStyles.ColumnContainer}`}>
        <div className={`Text ${homeStyles.TeamTitle}`}>
          {messages.homePage.teamTitle}
        </div>
        <div className={homeStyles.RowContainer3}>
          <div
            className={`Text ${homeStyles.ColumnContainer}`}
            onClick={() => {
              navigate("/agurafamartinez");
              window.scrollTo(0, 0);
            }}
            style={{ cursor: "pointer" }}
          >
            <img
              src={agurafamartinez}
              style={{
                width: "75%",
                height: "75%",
                borderRadius: "75%",
                marginBottom: "1vh",
              }}
              alt="Foto de perfil"
            />
            {messages.profilePage.agurafamartinez.title}
          </div>
          <div
            className={`Text ${homeStyles.ColumnContainer}`}
            onClick={() => {
              navigate("/afernandezortuzar");
              window.scrollTo(0, 0);
            }}
            style={{ cursor: "pointer" }}
          >
            <img
              src={afernandezortuzar}
              style={{
                width: "67%",
                height: "67%",
                borderRadius: "50%",
              }}
              alt="Foto de perfil"
            />
            {messages.profilePage.afernandezortuzar.title}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
