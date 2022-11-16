import { t } from "i18next";
import { useEffect, useLayoutEffect, useRef } from "react";
import ScrollingText from "../../../scrollingtext/ScrollingText";
import classes from "./MainPageAbout.module.css";
import gsap from "gsap";

function MainPageAbout(props: any) {
  const titleTopRef = useRef<HTMLHeadingElement>(null);
  const titleBottomRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const ulElement = gsap.utils.selector(ulRef);

  useEffect(() => {
    gsap.fromTo(
      titleTopRef.current,
      {
        x: "-30vw",
        opacity: 0,
      },
      {
        x: "-50px",
        opacity: 1,
        ease: "power1.out",
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "-=90%",
          end: "+=30%",
          scrub: 2,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      titleBottomRef.current,
      {
        x: "30vw",
        opacity: 0,
      },
      {
        x: "50px",
        opacity: 1,
        ease: "power1.out",
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "-=90%",
          end: "+=30%",
          scrub: 2,
        },
      }
    );
  }, []);

  useEffect(() => {
    // uses el.current.querySelectorAll() internally
    gsap.fromTo(
      ulElement("li"),
      {
        x: "30vw",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "-=50%",
          end: "+=30%",
          scrub: 1,
          markers: true,
        },
        backgroundColor: "red",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="section2"
      className="flex min-h-screen flex-col items-center bg-zinc-100 text-slate-800 overflow-hidden"
    >
      <div className="wrapper flex flex-col items-center">
        <h2 ref={titleTopRef} className="text-3xl">
          {t("What sets us apart")}
        </h2>
        <h2 ref={titleBottomRef} className="text-3xl">
          {t("from others are...")}
        </h2>

        <ul id="thirdCircle" ref={ulRef} className="w-2/3 mt-32">
          <li className="p-3 m-3 border" style={{ backgroundColor: "blue" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            sint!
          </li>
          <li className="p-3 m-3 border">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quae id necessitatibus quasi?
          </li>
          <li className="p-3 m-3 border">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            corporis quos architecto.
          </li>
          <li className="p-3 m-3 border">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            velit, cupiditate sapiente vel voluptatem fuga quia dolorum?
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MainPageAbout;
