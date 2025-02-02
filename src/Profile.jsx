//@ts-nocheck
import React from "react";
import { useMessages } from "./components/MessageContext";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Header from "./components/Header";
import homeStyles from "./Home.module.css";
import CEStyles from "./ClassroomExperiences.module.css";

function Profile() {
  const currentUrl = window.location.href;
  const { messages } = useMessages();
  const navigate = useNavigate();

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
    </>
  );
}

export default Profile;
