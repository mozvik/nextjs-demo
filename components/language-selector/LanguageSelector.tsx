import classes from "./LanguageSelector.module.css";
import { MouseEventHandler, useState } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const LanguageSelector = (props: any) => {
  const { i18n } = useTranslation()


  const onClickHandler = (ev: any) => {

    i18n.changeLanguage(i18n.language == 'en' ? 'hu':'en');

  }

  return (

      <div>
        <button onClick={onClickHandler} className={classes.button}>Nyelv váltás</button>
        <div>Jelenlegi: {i18n.language}</div>
      </div>

  );
};

export default LanguageSelector;