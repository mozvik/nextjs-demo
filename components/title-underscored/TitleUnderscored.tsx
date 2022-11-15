import classes from "components/scrollingtext/ScrollingText.module.css";
import { useEffect } from "react";
import { TitleUnderscoredProps } from "../../models/TitleUnderscored.interface";

const TitleUnderscored = (props: TitleUnderscoredProps) =>{

  useEffect(() => {
    console.log(props.children, props.firstUnderscoredWord, props.lastUnderscoredWord)
  });

  return(
    <div className={classes.content}>


    </div>
  );
}

export default TitleUnderscored