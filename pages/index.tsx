import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import ScrollingText from "../components/scrollingtext/ScrollingText";
import classes from "./styles.module.css";

const Home: NextPage = () => {

  return (
    <Fragment>
      <Head>
        <title>Főoldal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Főoldal" />
      </Head>
      <section
        className={
          classes.hero +
          " text-zinc-50 flex min-h-screen flex-col items-center justify-center relative overflow-hidden after:content-[''] after:absolute after:-bottom-[80%] after:-left-1/2 after:w-[200%] after:h-full after:bg-zinc-100 after:rounded-[50%]"
        }
      >
        <div className="wrapper flex flex-col justify-center">
          <div className="mb-32">
            <h1 className="text-6xl font-bold mb-10 flex">
              Welcome home&nbsp;<ScrollingText color='gainsboro' backgroundColor="orange" content={["Katalin","Józsi","Lajos a hosszú nevű"]}>children</ScrollingText>
            </h1>
            <p className="w-1/2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              ratione adipisci ex, numquam impedit eaque veniam accusantium sed.
            </p>
          </div>
        </div>
      </section>
      <section className="flex min-h-screen flex-col items-center justify-center bg-zinc-100 text-slate-800">
        <h1 className="text-6xl font-bold">Section 1</h1>
      </section>
    </Fragment>
  );
};

export default Home;
