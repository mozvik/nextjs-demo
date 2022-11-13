import { useRouter } from "next/router";
import classes from "./ArticleCard.module.css";

const ArticleCard = (props: any) => {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/articles/" + props.id);
  }

  return (
    <li className={classes.card}>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>
          {props.author} | {props.date_created}
        </address>
      </div>
      <div className={classes.image}>
        <img
          src={process.env.NEXT_PUBLIC_DIRECTUS_ASSETS_URL + props.image}
          alt={props.title}
        />
        <div>ID: {props.id}</div>
      </div>

      <div className={classes.actions} onClick={showDetailsHandler}>
        <button>Elolvasom</button>
      </div>
    </li>
  );
};

export default ArticleCard;
