import "./App.css";
import { createContext, useState } from "react";
import LanguageChooser from "./components/LanguageChooser";
import Content from "./components/Content";

export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState("DE");
  return (
    <div>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <LanguageChooser />
        <Content />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
