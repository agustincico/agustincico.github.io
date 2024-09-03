//@ts-nocheck
import "./App.css";
import homeStyles from "./Home.module.css";
import "./style.css";
import React from "react";
import Button from "./components/Button";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";
import { useMessages } from "./components/MessageContext";

const imageTecnoLiteraturaPath = "public/imagenSmalltalk/Tecnoliteratura.image";
const imageDibujosPath = "public/imagenSmalltalk/Representar.image";

function Home() {
  const navigate = useNavigate();
  const { messages } = useMessages();

  return (
    <>
      <div className={homeStyles.Header}>
        <div className={`Text ${homeStyles.MainTitle}`}>
          {messages.homePage.title}
        </div>
        <div className={`Text ${homeStyles.Introduction}`}>
          {messages.homePage.introduction}
        </div>
      </div>
      <div className={homeStyles.RowContainer1}>
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
        <p className={`Text ${homeStyles.Separator}`}>
          {messages.homePage.inbetweenButtonLabel}
        </p>
        <Button
          className={`Text ${homeStyles.CartonButton} ${homeStyles.TryOnlineButton}`}
          onClick={() => {
            navigate("/programming-with-drawings", {
              state: { image: imageDibujosPath },
            });
          }}
        >
          {messages.homePage.drawingsProgrammingButtonLabel}
        </Button>
      </div>
      <div className={homeStyles.RowContainer2}>
        <Button
          className={`Text ${homeStyles.CartonButton} ${homeStyles.MiddleButton}`}
          onClick={() => {
            const link = document.createElement("a");
            link.href =
              "imagenSmalltalk/Representar Multiplataforma 30-8-2024.zip";
            link.download = "Representar.zip";
            link.click();
          }}
        >
          {messages.homePage.downloadButtonLabel}
        </Button>
      </div>
      <div className={homeStyles.RowContainer2}>
        {/* <div className="ColumnContainer">
          <Button
            className="Text CartonButton TinyButton"
            onClick={() => {
              navigate("/about");
            }}
            style={{
              backgroundColor: `rgba(0, 200, 0, 0.7)`,
            }}
          >
            Sobre el proyecto
          </Button>
          <Button
            className="Text CartonButton TinyButton"
            onClick={() => {
              navigate("/contact-us");
            }}
            style={{
              backgroundColor: `rgba(255, 0, 200, 0.7)`,
            }}
          >
            Hablá con nosotros
          </Button>
        </div> */}
        <Button
          className={`Text ${homeStyles.CartonButton} ${homeStyles.MiddleButton}`}
          onClick={() => {
            navigate("/classroom-experiences");
          }}
        >
          {messages.homePage.classroomExperiencesButtonLabel}
        </Button>
        {/* <div className="ColumnContainer">
          <Button
            className="Text CartonButton TinyButton"
            onClick={() => {
              navigate("/news-blog");
            }}
            style={{
              backgroundColor: `rgba(100, 0, 255, 0.7)`,
            }}
          >
            Blog de Novedades
          </Button>
          <Button
            className="Text CartonButton TinyButton"
            onClick={() => {
              navigate("/tutorials");
            }}
            style={{
              backgroundColor: `rgba(200, 0, 0, 0.7)`,
            }}
          >
            Videotutoriales
          </Button>
        </div> */}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
