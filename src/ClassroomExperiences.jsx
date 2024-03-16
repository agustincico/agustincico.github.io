//@ts-nocheck
import "./App.css";
import "./style.css";
import CEStyles from "./ClassroomExperiences.module.css";
import homeStyles from "./Home.module.css";
import React from "react";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import ceroMasInfinitoImage from "./assets/images/classroom-experiences/3.0.paseando por el 0+infinito.jpg";
import pensandoRobot from "./assets/images/classroom-experiences/3.2.1.Pensando el Robot.2.jpg";
import robotAlLado from "./assets/images/classroom-experiences/3.3.Robot al lado.jpg";
import controlandoRobot from "./assets/images/classroom-experiences/3.5.Controlando el Robot.jpg";
import bugRobot from "./assets/images/classroom-experiences/3.6.Bug robot.jpg";
import diploma from "./assets/images/classroom-experiences/1.Diploma.jpg";

function ClassroomExperiences() {
  const navigate = useNavigate();
  return (
    <>
      <div className={CEStyles.Header}>
        <Button
          className={`Text ${homeStyles.CartonButton} ${homeStyles.TinyButton}`}
          onClick={() => {
            navigate("/");
          }}
          style={{ marginLeft: "1vw", marginTop: "1vh" }}
        >
          Inicio
        </Button>
      </div>
      <div className={`Text ${CEStyles.MainTitle}`}>Experiencias en aula</div>
      <p className={`Text ${CEStyles.Description}`}>
        Este proyecto fue puesto a prueba en una experiencia didáctica realizada
        en la Facultad de Ciencias Exactas y Naturales de la UBA.
      </p>
      <h2 className={`Text ${CEStyles.Subtitle}`}>
        En el verano de 2023 se ofreció a la comunidad un taller de
        “Programación con Dibujos” donde participaron niñas y niños de 6to y 7mo
        grado:
      </h2>
      <img
        src={ceroMasInfinitoImage}
        style={{ width: "70%" }}
        alt="Niños y niñas recorriendo el pabellón Cero más Infinito"
      />
      <p className={`Text ${CEStyles.Description}`}>
        Fueron 3 clases. En la primera representaron fenómenos naturales, como
        la germinación de una semilla. En la segunda se trabajó con un simulador
        de robot. En la tercera clase se representaron los números naturales y
        la operación de la suma.
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
        La versión que se utilizó en este taller contenía un simulador de robot.
        Esto inspiró la actual versión que permite realizar simulaciones de tema
        libre.
      </p>
      <img
        src={controlandoRobot}
        style={{ width: "80%" }}
        alt="Dos niños viendo el simulador de un robot en una computadora"
      />
      <p className={`Text ${CEStyles.Description}`}>
        Además de definir el programa en forma visual por medio de dibujos, es
        posible visualizar la ejecución del programa, lo que se conoce como
        ‘debuggear’. Esto permite analizar en forma más clara el funcionamiento
        del programa, para luego modificarlo.
      </p>
      <img
        src={bugRobot}
        style={{ width: "80%" }}
        alt="Niños y niñas escuchan atentamente una explicación del docente"
      />
      <p className={`Text ${CEStyles.Description}`}>
        El taller finalizó con la entrega de diplomas. Fue un aprendizaje tanto
        para los chicos como para quienes hacemos este proyecto.
      </p>
      <img
        src={diploma}
        style={{ width: "80%" }}
        alt="Foto grupal con los niños y niñas participantes sosteniendo un diploma que certifica su participación en el taller"
      />
      <p className={`Text ${CEStyles.Description}`}>
        Gracias a los todos los niños y niñas participantes. Estarán siempre en
        el recuerdo como los primeros en poner a prueba este nuevo enfoque de la
        programación.
      </p>
    </>
  );
}

export default ClassroomExperiences;
