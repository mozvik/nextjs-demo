import { Fragment, useEffect, useState } from "react";
import classes from "./ArticleDetail.module.css";

function ArticleDetail(props: any) {
  // const [hydrated, setHydrated] = useState(false);

  // useEffect(() => {
  //     setHydrated(true);
  // }, []);

  //   if (!hydrated) {
  //       // Returns null on first render, so the client and server match
  //       return null;
  //   }

  return (
    <Fragment>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h3>
            {props.title} | {props.id}
          </h3>
          <div className={classes.address}>
            <div>{props.author}</div> <div>{props.date_created}</div>
          </div>
        </div>
        <div className={classes.image}>
          <img
            src={process.env.NEXT_PUBLIC_DIRECTUS_ASSETS_URL + props.image}
            alt={props.title}
          />
        </div>
        <div
          className={classes.text}
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
      </div>
    </Fragment>
  );
}

export default ArticleDetail;
