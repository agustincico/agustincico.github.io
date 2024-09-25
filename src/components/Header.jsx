//@ts-nocheck
import { useMessages } from "./MessageContext";

export default function Header() {
  const { locale, setLocale, otherLanguage } = useMessages();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        width: "100%",
        height: "5vh",
        paddingRight: "10px",
        fontFamily: "Pastel Crayon",
      }}
    >
      <span
        onClick={() => {
          locale === "es" ? setLocale("en") : setLocale("es");
        }}
      >
        {otherLanguage}
      </span>
    </div>
  );
}
