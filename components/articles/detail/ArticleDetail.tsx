import Head from "next/head";
import { Fragment } from "react";
import classes from "./ArticleDetail.module.css";

function ArticleDetail(props: any) {
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h3>{props.title} | { props.id }</h3>
          <div className={classes.address}>
            <div>{props.author}</div> <div>{props.published}</div>
          </div>
        </div>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.text}>
          {props.content}
        </div>
      </div>
</Fragment>
  );
}

export default ArticleDetail;
