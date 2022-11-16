import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as en_translation from "./en.json";
import * as hu_translation from "./hu.json";
// import { en_translation } from "../i18n/en.js";
// import { hu_translation } from "../i18n/hu";

const resources = {
  en: en_translation,
  hu: hu_translation,
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
