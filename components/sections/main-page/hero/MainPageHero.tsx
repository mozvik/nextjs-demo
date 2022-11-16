import { t } from "i18next";
import { useEffect, useLayoutEffect, useRef } from "react";
import ScrollingText from "../../../scrollingtext/ScrollingText";
import classes from "./MainPageHero.module.css";
import gsap from "gsap";

function MainPageHero(props: any) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        background:
          "linear-gradient( 90deg, rgba(69, 58, 62, 10) 0%, rgba(50, 50, 73, 1) 57%, rgba(46, 62, 80, 1) 100% )",
        opacity: 1,
      },
      {
        background:
          "linear-gradient( 90deg, rgba(69, 58, 62, 0) 0%, rgba(50, 50, 73, 0) 57%, rgba(46, 62, 80, 0) 100% )",
        opacity: 0,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "+=300",
          end: "+=300",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="main-page-hero"
      ref={ref}
      className={
        classes.hero +
        " text-zinc-50 flex min-h-screen flex-col items-center justify-center relative overflow-hidden after:content-[''] after:absolute after:-bottom-[80%] after:-left-1/2 after:w-[200%] after:h-full after:bg-zinc-100 after:rounded-[50%]"
      }
    >
      <div className="wrapper flex flex-col items-center justify-center">
        <div className="mb-32">
          <h1 className="text-6xl font-bold mb-10 flex">
            {t("HERO.TITLE")}&nbsp;
            <ScrollingText
              color="gainsboro"
              backgroundColor="orange"
              content={["Szöveg", "ami", "mozogni fog."]}
            >
              children
            </ScrollingText>
          </h1>
          <p className="w-1/2">{t("HERO.SUBTITLE")}</p>
        </div>
      </div>
    </section>
  );
}

export default MainPageHero;
