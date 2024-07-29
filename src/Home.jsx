//@ts-nocheck
import "./App.css";
import homeStyles from "./Home.module.css";
import "./style.css";
import React from "react";
import Button from "./components/Button";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

const imageTecnoLiteraturaPath = "public/imagenSmalltalk/Tecnoliteratura.image";
const imageDibujosPath = "public/imagenSmalltalk/Representar.image";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className={homeStyles.Header}>
        <div className={`Text ${homeStyles.MainTitle}`}>Representar</div>
        <div className={`Text ${homeStyles.Introduction}`}>
          Un lenguaje de programación para fortalecer la visión de la
          programación como construcción de representaciones
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
          Tecno-literatura <br /> (poemas ejecutables)
        </Button>
        <p className={`Text ${homeStyles.Separator}`}>O</p>
        <Button
          className={`Text ${homeStyles.CartonButton} ${homeStyles.TryOnlineButton}`}
          onClick={() => {
            navigate("/programming-with-drawings", {
              state: { image: imageDibujosPath },
            });
          }}
        >
          Programación con dibujos <br /> (un ejemplo)
        </Button>
      </div>
      <div className={homeStyles.RowContainer2}>
        <Button
          className={`Text ${homeStyles.CartonButton} ${homeStyles.MiddleButton}`}
          onClick={() => {
            const link = document.createElement("a");
            link.href =
              "imagenSmalltalk/Representar Multiplataforma 12-3-2024.zip";
            link.download = "Representar.zip";
            link.click();
          }}
        >
          Descargá la versión completa
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
          Conocé sobre nuestra experiencia en un aula
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
