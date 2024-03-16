//@ts-nocheck
import React from "react";
import "./App.css";
import representacionSimbolica from "./assets/papers/Representacion-simbolica-y-materialismo-dialectico.pdf";
import integracionDelConocimiento from "./assets/papers/Integración_del_conocimiento_cientifico_y_materialismo_dialectico.pdf";
import paperALanguage from "./assets/papers/Paper.A.Language.Preprint.pdf";

function About() {
  return (
    <>
      <div
        className="Text"
        style={{
          fontSize: 80,
          flex: 1,
        }}
      >
        Sobre el proyecto
      </div>
      <h2
        className="Text"
        style={{
          fontSize: 25,
          flex: 1,
          width: "80%",
          textAlign: "left",
        }}
      >
        - Quiénes somos y por qué queremos dominar el mundo?
      </h2>
      <p
        className="Text"
        style={{
          fontSize: 20,
          flex: 1,
          width: "80%",
          textAlign: "left",
        }}
      >
        Somos Agustin Martinez y Agustin Fernández, docentes e investigadores
        del departamento de computación de la facultad de ciencias exactas y
        naturales de la Universidad de Buenos Aires. Somos científicos? Quizás,
        pero no queremos dominar el mundo (un poco estigmatizante de tu parte
        asumir lo contrario. Igual tranqui, estás perdonado y quedarás eximido
        de trabajos forzados cuando efectivamente lo dominemos).
      </p>
      <h2
        className="Text"
        style={{
          fontSize: 25,
          flex: 1,
          width: "80%",
          textAlign: "left",
        }}
      >
        - Cómo surgió la idea?
      </h2>
      <p
        className="Text"
        style={{
          fontSize: 20,
          flex: 1,
          width: "80%",
          textAlign: "left",
        }}
      >
        Bueno, todo comenzó con un sueño. El de dominar el mundo, pensarás? No,
        cortala con eso. (De acá en adelante lo escribió Copilot, no entiendo de
        dónde sacó el contexto) El sueño de que los niños y niñas de todo el
        mundo puedan aprender a programar de una manera divertida y creativa. Y
        que mejor manera de hacerlo que con un lenguaje de programación visual,
        que permita a los niños y niñas crear sus propios mundos y personajes, y
        que además sea de código abierto y gratuito. Y así nació Representar, un
        lenguaje de programación visual para niños y niñas de 4 a 8 años.
      </p>
      <h2
        className="Text"
        style={{
          fontSize: 25,
          flex: 1,
          width: "80%",
          textAlign: "left",
        }}
      >
        - Pero como saben que su plan funciona?
      </h2>
      <p
        className="Text"
        style={{
          fontSize: 20,
          flex: 1,
          width: "80%",
          textAlign: "left",
        }}
      >
        Es simple, miren esta pila de artículos científicos, en ellos está la
        demostración teórica de nuestro plan. Eh? No, no los podés mirar, son
        secretos. Qué cómo esperamos que confíen en nosotros? Tenés un punto...
        Tomá, por ahora podés leer estos. {<br />}
        <a href={representacionSimbolica} target="_blank">
          - Representación simbólica y materialismo dialéctico
        </a>
        {<br />}
        <a href={integracionDelConocimiento} target="_blank">
          - Integración del conocimiento científico y materialismo dialéctico
        </a>
        {<br />}
        <a href={paperALanguage} target="_blank">
          - A Language Based on Two Relations between Symbols
        </a>
      </p>
      <h2
        className="Text"
        style={{
          fontSize: 25,
          flex: 1,
          width: "80%",
          textAlign: "left",
        }}
      >
        - Qué podemos esperar de proyectos futuros?
      </h2>
      <p
        className="Text"
        style={{
          fontSize: 20,
          flex: 1,
          width: "80%",
          textAlign: "left",
          paddingBottom: 100,
        }}
      >
        Bueh, para qué pedís artículos científicos si no los vas a leer? Leelos
        y te vas a enterar.
      </p>
    </>
  );
}

export default About;
