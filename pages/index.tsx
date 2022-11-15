import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import ScrollingText from "../components/scrollingtext/ScrollingText";
import classes from "./styles.module.css";
import dynamic from "next/dynamic";
import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/language-selector/LanguageSelector";

const Home: NextPage = () => {
  const Animator = dynamic(
    import("react-scroll-motion").then((it) => it.Animator),
    { ssr: false }
  );
  const { t } = useTranslation();


  return (
    <Fragment>
      <Head>
        <title>Főoldal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Főoldal" />
      </Head>
      <LanguageSelector></LanguageSelector>
      <section
        className={
          classes.hero +
          " text-zinc-50 flex min-h-screen flex-col items-center justify-center relative overflow-hidden after:content-[''] after:absolute after:-bottom-[80%] after:-left-1/2 after:w-[200%] after:h-full after:bg-zinc-100 after:rounded-[50%]"
        }
      >
        <div className="wrapper flex flex-col justify-center">
          <div className="mb-32">
            <h1 className="text-6xl font-bold mb-10 flex">
              {t('HERO-TITLE')}&nbsp;
              <ScrollingText
                color="gainsboro"
                backgroundColor="orange"
                content={["Béla", "Józsi", "Lajos a hosszú nevű"]}
              >
                children
              </ScrollingText>
            </h1>
            <p className="w-1/2">
              {t('HERO-SUBTITLE')}
            </p>
          </div>
        </div>
      </section>
      {/*<ScrollContainer>*/}
      {/*  <ScrollPage>*/}
      <section className="flex min-h-screen flex-col items-center bg-zinc-100 text-slate-800">
        <span style={{ fontSize: 40 }}>
          {/*<Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>*/}
          {/*<Animator animation={batch(Fade(), Sticky(), MoveIn(1000, 0))}>*/}
          {/*  See you 💛*/}
          {/*</Animator>*/}
        </span>
        <h2></h2>
        <h2></h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
      {/*  </ScrollPage>*/}
      {/*</ScrollContainer>*/}

      <h1 className="text-6xl font-bold">Section 1</h1>
    </Fragment>
  );
};

export default Home;
