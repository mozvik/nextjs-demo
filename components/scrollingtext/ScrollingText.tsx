import { useEffect, useRef, useState } from "react";
import { ScrollingTextProps } from "../../models/ScrollingText.interface";

import classes from "./ScrollingText.module.css";
import { InView } from "react-intersection-observer";
import { PositionCalc } from "../../functions/positionCalc";

const ScrollingText = (props: ScrollingTextProps) => {

  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const onChangeCallback = (
    inView: boolean,
    entry: IntersectionObserverEntry
  ) => {
    if (inView) {
      window.addEventListener('scroll',onScrollCallback)
    }
    else {
      window.removeEventListener('scroll',onScrollCallback)
    }
  };

  const onScrollCallback = (ev: Event) => {
    if (ref && ref.current) {
      const pos = PositionCalc(ref.current.getBoundingClientRect().top);
      
      if (pos > 40) {
        setIndex(0)
      } else if (pos < 33 && pos >= 23) {
        setPrevIndex(0)
        setIndex(1)
      } else if (pos < 23) {
        setPrevIndex(1)
        setIndex(2)
      }

      


    }
    
  }

  return (
    <InView as="div" onChange={onChangeCallback}>
      <div ref={ref} className={classes.content} style={{ color: props.color, backgroundColor: props.backgroundColor}}>
        <span className={classes.leave}>{props.content[index]}</span>
      
      </div>
    </InView>
  );
};

export default ScrollingText;
