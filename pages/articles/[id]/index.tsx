import { ID } from "@directus/sdk";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Fragment } from "react";
import ArticleDetail from "../../../components/articles/detail/ArticleDetail";
import { Article, ResponseArticleDataType } from "../../../interface/Article";
import directus from "../../../lib/directus";

const ArticleDetails: NextPage<Article> = (props) => {
  // const ArticleDetails: NextPage<ResponseArticleDataType> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={props.title} />
      </Head>
      <ArticleDetail
        id={props.id}
        title={props.title}
        date_created={props.date_created}
        author={props.author}
        image={props.image}
        content={props.content}
      />
    </Fragment>
  );
};

export async function getServerSideProps(context: {
  params?: any;
  count?: any;
}) {
  const articleId: ID = context?.params?.id; //[id]
  const dr = directus.items("articles");

  try {
    const data: any = await dr.readOne(articleId as ID);
    return {
      props: data,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
export default ArticleDetails;
