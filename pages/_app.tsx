import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { Fragment } from "react";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
