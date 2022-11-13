import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Fragment } from "react";
import ArticleDetail from "../../../components/articles/detail/ArticleDetail";
import { Article, ResponseArticleDataType } from "../../../interface/Article";
import { dummy_articles } from "../../../interface/DummyData";

const Article: NextPage<ResponseArticleDataType> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.article.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={props.article.title} />
      </Head>
      <ArticleDetail
        id={props.article.id}
        title={props.article.title}
        published={props.article.published}
        author={props.article.author}
        image={props.article.image}
      />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<{
  article: Article;
}> = async (context) => {
  const articleId = context?.params?.details?.toString(); //[details]
  const article = dummy_articles.find((item) => item.id == articleId);

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
};

export default Article;
