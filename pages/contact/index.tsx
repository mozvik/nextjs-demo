import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import ContactForm from "../../components/contact/ContactForm";

const Contact: NextPage = () => {
  const onFormSubmit = (contactInfo: any) => {
    console.log("contactInfo", contactInfo);
    // post data
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Kapcsolat</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kapcsolat" />
      </Head>

      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Kapcsolat</h1>
        <ContactForm onSubmitContact={onFormSubmit} />
      </div>
    </div>
  );
};

export default Contact;
