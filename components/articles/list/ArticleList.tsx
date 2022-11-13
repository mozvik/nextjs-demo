import ArticleCard from "../card/ArticleCard";
import classes from "./ArticleList.module.css";

function ArticleList(props: any) {
  return (
    <ul className={classes.list}>
      {props.articles.map((article: any) => (
        <ArticleCard
          key={article.id}
          id={article.id}
          image={article.image}
          title={article.title}
          date_created={article.date_created}
          author={article.author}
        />
      ))}
    </ul>
  );
}

export default ArticleList;
