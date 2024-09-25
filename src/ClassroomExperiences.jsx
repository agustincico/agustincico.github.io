//@ts-nocheck
import "./App.css";
import "./style.css";
import CEStyles from "./ClassroomExperiences.module.css";
import homeStyles from "./Home.module.css";
import React from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";
import { useMessages } from "./components/MessageContext";
import ceroMasInfinitoImage from "./assets/images/classroom-experiences/3.0.paseando por el 0+infinito.jpg";
import pensandoRobot from "./assets/images/classroom-experiences/3.2.1.Pensando el Robot.2.jpg";
import robotAlLado from "./assets/images/classroom-experiences/3.3.Robot al lado.jpg";
import controlandoRobot from "./assets/images/classroom-experiences/3.5.Controlando el Robot.jpg";
import bugRobot from "./assets/images/classroom-experiences/3.6.Bug robot.jpg";
import diploma from "./assets/images/classroom-experiences/1.Diploma.jpg";

function ClassroomExperiences() {
  const navigate = useNavigate();
  const { messages } = useMessages();
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
      <div className={`Text ${CEStyles.MainTitle}`}>
        {messages.classroomExperiencesPage.title}
      </div>
      <p className={`Text ${CEStyles.Description}`}>
        {messages.classroomExperiencesPage.description}
      </p>
      <h2 className={`Text ${CEStyles.Subtitle}`}>
        {messages.classroomExperiencesPage.subtitle}
      </h2>
      <img
        src={ceroMasInfinitoImage}
        style={{ width: "70%" }}
        alt="Niños y niñas recorriendo el pabellón Cero más Infinito"
      />
      <p className={`Text ${CEStyles.Description}`}>
        {messages.classroomExperiencesPage.paragraph1}
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={pensandoRobot}
          style={{ width: "50%" }}
          alt="Niños y niñas piensan en un problema mientras manipulan fichas con símbolos en una mesa"
        />
        <img
          src={robotAlLado}
          style={{ width: "38.6%" }}
          alt="Dos niños trabajando en un ejercicio para manejar un robot en una computadora"
        />
      </div>
      <p className={`Text ${CEStyles.Description}`}>
        {messages.classroomExperiencesPage.paragraph2}
      </p>
      <img
        src={controlandoRobot}
        style={{ width: "80%" }}
        alt="Dos niños viendo el simulador de un robot en una computadora"
      />
      <p className={`Text ${CEStyles.Description}`}>
        {messages.classroomExperiencesPage.paragraph3}
      </p>
      <img
        src={bugRobot}
        style={{ width: "80%" }}
        alt="Niños y niñas escuchan atentamente una explicación del docente"
      />
      <p className={`Text ${CEStyles.Description}`}>
        {messages.classroomExperiencesPage.paragraph4}
      </p>
      <img
        src={diploma}
        style={{ width: "80%" }}
        alt="Foto grupal con los niños y niñas participantes sosteniendo un diploma que certifica su participación en el taller"
      />
      <p className={`Text ${CEStyles.Description}`}>
        {messages.classroomExperiencesPage.paragraph5}
      </p>
    </>
  );
}

export default ClassroomExperiences;
