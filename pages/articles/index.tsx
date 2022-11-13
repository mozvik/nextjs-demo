import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import ArticleList from "../../components/articles/list/ArticleList";
import { Article, ResponseArticlesDataType } from "../../interface/Article";
import { dummy_articles } from "../../interface/DummyData";

const Articles: NextPage<ResponseArticlesDataType> = (props) => {
  return (
    <Fragment>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Blog</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Bejegyzések" />
        </Head>

        <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold mb-10">A legrissebb bejegyzések</h1>

          <ArticleList articles={props.articles} />
        </div>
      </div>
    </Fragment>
  );
};

// export async function getStaticProps() { //SSG
//   const dummy_data: article[] = dummy_articles; //fetch api
//   return {
//     props: {
//       articles: dummy_data
//     }
//   }
// }

export async function getServerSideProps(context: any) {
  const req = context.req;
  const res = context.res;
  const dummy_data: Article[] = dummy_articles;

  //fetch('/api/articles') //--> saját api --> api folderből az articles.ts
  return {
    props: {
      articles: dummy_data,
    },
  };
}

export default Articles;
