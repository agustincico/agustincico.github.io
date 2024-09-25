//@ts-nocheck
import React, { createContext, useContext, useState, useEffect } from "react";
import translations from "./translations";

const MessagesContext = createContext({});

export const MessagesProvider = ({ children }) => {
  //const browserLanguage = navigator.language;
  //console.log("browserLanguage: ", browserLanguage);
  const initialLocale = "es"; //translations[browserLanguage] ? browserLanguage : "en";
  const [locale, setLocale] = useState(initialLocale);
  const [messages, setMessages] = useState(translations[locale]);
  const [otherLanguage, setOtherLanguage] = useState("English version");

  useEffect(() => {
    setMessages(translations[locale]);
    locale === "es"
      ? setOtherLanguage("English version")
      : setOtherLanguage("Versión en Español");
  }, [locale]);

  return (
    <MessagesContext.Provider
      value={{ messages, locale, setLocale, otherLanguage }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessages = () => useContext(MessagesContext);
