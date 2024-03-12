import { useContext } from "react";
import { LanguageContext } from "../App";

const Content = () => {
  const { language } = useContext(LanguageContext);

  const messages = {
    DE: "Hallo Welt!",
    US: "Hello World!",
    TR: "Selam Dünya!",
    IR: "سلام دنیا!",
    FR: "Bonjour le monde!",
    SP: "Hola Mundo!",
    DU: "Hallo Wereld!",
    Ch: "Nihao!",
  };
  console.log(messages)
  return (
    <div className="msg">
      <h3>{messages[language]}</h3>
    </div>
  );
};
export default Content;
