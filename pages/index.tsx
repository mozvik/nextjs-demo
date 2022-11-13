import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Főoldal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Főoldal" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center py-2 relative overflow-hidden after:content-[''] after:absolute after:top-3/4 after:-left-1/2 after:w-[200%] after:h-full after:bg-slate-400 after:rounded-[50%]">
        <h1 className="text-6xl font-bold">Welcome home</h1>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-400 text-gray-100">
        <h1 className="text-6xl font-bold">Section 1</h1>
      </div>
    </Fragment>
  );
};

export default Home;
