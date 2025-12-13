import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ar"); 

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children} 
    </LanguageContext.Provider>
  );
}
