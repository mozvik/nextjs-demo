import type { NextPage } from "next";
import Head from "next/head";
import { Fragment} from "react";
import ScrollingText from "../components/scrollingtext/ScrollingText";
import classes from "./styles.module.css";

import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/language-selector/LanguageSelector";
import { ScrollTrigger, Tween } from "react-gsap";

const Home: NextPage = () => {
  const { t } = useTranslation();
  
  return (
    <Fragment>
      <Head>
        <title>Főoldal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Főoldal" />
      </Head>
      <LanguageSelector></LanguageSelector>
      <ScrollTrigger pin={true} start="400px top" end="600px bottom" scrub={2.4} markers onUpdate={(e:any) => console.log("toggled, isActive:", e)}>
        <Tween
          from={{background: 'linear-gradient( 90deg, rgba(69, 58, 62, 10) 0%, rgba(50, 50, 73, 1) 57%, rgba(46, 62, 80, 1) 100% )' }}
          to={{immediateRender: false, background: 'linear-gradient( 90deg, rgba(69, 58, 62, 0) 0%, rgba(50, 50, 73, 0) 57%, rgba(46, 62, 80, 0) 100% )' }}
        >
          <section
            className={
              classes.hero +
              " text-zinc-50 flex min-h-screen flex-col items-center justify-center relative overflow-hidden after:content-[''] after:absolute after:-bottom-[80%] after:-left-1/2 after:w-[200%] after:h-full after:bg-zinc-100 after:rounded-[50%]"
            }
          >
            <div className="wrapper flex flex-col justify-center">
              <div className="mb-32">
                <h1 className="text-6xl font-bold mb-10 flex">
                  {t("HERO-TITLE")}&nbsp;
                  <ScrollingText
                    color="gainsboro"
                    backgroundColor="orange"
                    content={["Szöveg", "ami", "mozogni fog."]}
                  >
                    children
                  </ScrollingText>
                </h1>
                <p className="w-1/2">{t("HERO-SUBTITLE")}</p>
              </div>
            </div>
          </section>
        </Tween>
      </ScrollTrigger>
      <ScrollTrigger start="-400px center" end="00px center" scrub={1.95}>
        <section className="flex min-h-screen flex-col items-center bg-zinc-100 text-slate-800 overflow-hidden">
          <Tween
            from={{ x: "-70vw", opacity: 0 }}
            to={{ x: "-50px", opacity: 1 }}
            duration={120}
            ease="power1.out"
          >
            <h2 className="text-3xl">{t("What sets us apart")}</h2>
          </Tween>

          <Tween
            from={{ x: "70vw", opacity: 0 }}
            to={{ x: "50px", opacity: 1 }}
          >
            <h2 className="text-3xl">{t("from others are...")}</h2>
          </Tween>

          <ul className="w-2/3 mt-10">
            <li className="p-3 m-3 border">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, sint!</li>
            <li className="p-3 m-3 border">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quae id necessitatibus quasi?</li>
            <li className="p-3 m-3 border">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum corporis quos architecto.</li>
            <li className="p-3 m-3 border">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit, cupiditate sapiente vel voluptatem fuga quia dolorum?</li>
          </ul>
        </section>
      </ScrollTrigger>
      <h1 className="text-6xl font-bold">Section 1</h1>
    </Fragment>
  );
};

export default Home;
