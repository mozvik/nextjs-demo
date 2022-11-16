import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useEffect, useLayoutEffect, useRef } from "react";

import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/language-selector/LanguageSelector";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import MainPageHero from "../components/sections/main-page/hero/MainPageHero";
import MainPageAbout from "../components/sections/main-page/about/MainPageAbout";

const Home: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { t } = useTranslation();
 

  // useEffect(() => {
  //   // uses el.current.querySelectorAll() internally
  //   gsap.to(q("li"), {
  //     x: -100,
  //     stagger: 0.5,
  //     scrollTrigger: {
  //       trigger: el.current,
  //       start: 'center center',
        
  //     },
  //     backgroundColor: 'red'
  //   });
  // }, []);

  return (
    <Fragment>
      <Head>
        <title>Főoldal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Főoldal" />
      </Head>
      <LanguageSelector/>
      <MainPageHero/>
      <MainPageAbout/>

      <h1 className="text-6xl font-bold">Section 1</h1>
    </Fragment>
  );
};

export default Home;
