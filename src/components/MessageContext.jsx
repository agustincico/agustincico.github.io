//@ts-nocheck
import React, { createContext, useContext, useState } from "react";
import translations from "./translations";

const MessagesContext = createContext({});

export const MessagesProvider = ({ children }) => {
  const browserLanguage = navigator.language;
  const initialLocale = "es"; //translations[browserLanguage] ? browserLanguage : "en";
  console.log("browserLanguage: ", browserLanguage);
  const [locale, setLocale] = useState(initialLocale);
  const messages = translations[locale];

  return (
    <MessagesContext.Provider value={{ messages, locale, setLocale }}>
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessages = () => useContext(MessagesContext);
